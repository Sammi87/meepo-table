import { CommonProps } from "@/types/cellTypes";
import { Column, ColumnId } from "@/types/tableTypes";
import { onMounted, onUnmounted, Ref } from "vue";
import { debounce } from "./generalUtils";

type AccordionColumn<T> = { id: ColumnId, width: number, prio: T, hidden: boolean }

export const accordionizer = <P extends CommonProps>(table: Ref<HTMLElement>, minimized: Ref<ColumnId[]>, columns: readonly Column<P, any>[]) => {
  if (!columns || !table.value) return;
  const buffer = 5;
  const time = 300;
  const breakWidths: number[] = [];
  const accordion: AccordionColumn<number | undefined>[] = [];
  let scrollWidth = table.value.scrollWidth;
  let tableWidth = table.value.clientWidth;

  const updateAccordion = (entry?: HTMLElement, setup?: boolean) => {
    scrollWidth = table.value.scrollWidth;
    tableWidth = table.value.clientWidth;

    for (const node in (entry ? entry : table.value).children[0].children) {
      if (parseInt(node) >= 0) {
        const index = parseInt(node);
        const currentColumn = columns[index];

        setup 
          ? accordion.push({
            id: currentColumn.columnId,
            width: table.value.children[0].children[node].clientWidth,
            prio: currentColumn.priority,
            hidden: false,
          })
          : accordion[index].width = table.value.children[0].children[node].clientWidth;
      }
    }
  }

  updateAccordion(undefined, true);

  const checkIfShouldMinize = (loop?: boolean): void => { 
    const prios = accordion.filter(c => c.prio).length;
    const hidden = accordion.filter(c => c.hidden).length;

    if (prios > hidden && (tableWidth + buffer) < scrollWidth) {
      const nextAvailableColumn = accordion.filter(c => !c.hidden && c.prio).sort((a, b) => a.prio! < b.prio! ? 1 : -1).pop();
      const accordionColumn = accordion.find(c => c.id === nextAvailableColumn?.id);
      
      if (nextAvailableColumn && accordionColumn) {
        accordionColumn.width = nextAvailableColumn.width
        accordionColumn.hidden = true;
        breakWidths.push(scrollWidth);
        minimized.value.push(nextAvailableColumn.id);
        if (loop) {
          updateAccordion();
          add();
        }
        setTimeout(() => { 
          updateAccordion();
          add();
        }, time);
      }
       
    }
  }

  const checkIfAddBack = () => {
    if (minimized.value.length > 0) {
      const lastMinimizedColumn = accordion.find(c => c.id === minimized.value[minimized.value.length - 1]);
      
      if (lastMinimizedColumn && tableWidth > breakWidths[breakWidths.length-1]) {
        accordion.find(c => c.id === lastMinimizedColumn.id)!.hidden = false;
        breakWidths.pop();
        minimized.value.pop();
        
        setTimeout(() => { 
          updateAccordion();
          remove();
        }, time);
      }
    }
  }
  
  const add = debounce(() => checkIfShouldMinize(false), time);
  const remove = debounce(() => checkIfAddBack(), time);

  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      updateAccordion(entry.target as HTMLElement, false);
      add();
      remove();
    }
  });

  if (table.value) {
    observer.observe(table.value);
  }

  onMounted(() => checkIfShouldMinize(true));
  onUnmounted(() => {
    observer.disconnect();
  });
}
