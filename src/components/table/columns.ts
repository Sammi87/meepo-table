
import Chip from '@/components/cells/Chip.vue';
import Text from "@/components/cells/Text.vue";
import NumberComponent from "@/components/cells/Number.vue";
import DateComponent from "@/components/cells/Date.vue";
import Fold from "@/components/cells/Fold.vue";
import Checkbox from '@/components/cells/Checkbox.vue';
import ContextButton from "@/components/cells/ContextButton.vue";
import { AlignX } from '@/types/enums';
import { uid } from '@/utils/generalUtils';
import { Column, ColumnId, HeaderColumn, HeaderComponent, PartialColumn, SubTable } from '@/types/tableTypes';
import { CheckboxProps, ChipProps, CommonProps, ContextButtonProps, DateProps, FoldProps, NumberProps, TextProps } from '@/types/cellTypes';
import { computed, markRaw } from 'vue';
import OverlayTextField from '@/components/overlays/OverlayTextField.vue';
import OverlayNumberField from '@/components/overlays/OverlayNumberField.vue';
import OverlayDateField from '@/components/overlays/OverlayDateField.vue';
import ContextMenu from '../overlays/ContextMenu.vue';



export const columnFn = <C extends CommonProps, T>(props: Column<C, T>): Column<C, T> => {
  return {
    visible: true,
    ...props
  };
};

export const headerColumnFn = <P extends HeaderColumn>(component: HeaderComponent<P>): HeaderComponent<P> => component;

export const foldColumn = <T, S>(props: PartialColumn<S, FoldProps> & { subTable?: SubTable<S> }): Column<FoldProps, S> & { subTable?: SubTable<S> } => columnFn({ 
  classes: 'button-cell',
  getValue: (props: S) => false,
  header: computed(() => ''),
  sortable: false,
  searchable: false,
  align: AlignX.CENTER,
  gridSpace: 'var(--th-height)',
  ...props,
  type: 'fold',
  component: markRaw(Fold),
})

export const checkboxColumn = <T>(props: PartialColumn<T, CheckboxProps>): Column<CheckboxProps, T>  => columnFn({ 
    classes: 'button-cell',
    type: 'checkbox',
    component: markRaw(Checkbox),
    getValue: (props: T) => false,
    header: computed(() => ''),
    sortable: false,
    searchable: false,
    align: AlignX.CENTER,
    gridSpace: 'var(--th-height)',
    ...props
  }
);

export const textColumn = <T>(props: PartialColumn<T, TextProps>): Column<TextProps, T>  => columnFn({ 
    getValue: (props: T) => '',
    header:  computed(() => 'Text'),
    sortable: true,
    searchable: true,
    align: AlignX.LEFT,
    gridSpace: 'auto',
    onClick: false,
    editComponent: markRaw(OverlayTextField),
    ...props,
    type: 'text',
    component: markRaw(Text),
  }
);

export const numberColumn = <T>(props: PartialColumn<T, NumberProps>): Column<NumberProps, T>  => columnFn({
    getValue: (props: T) => undefined,
    header:  computed(() => 'Number'),
    sortable: true,
    searchable: true,
    align: AlignX.RIGHT,
    gridSpace: 'min-content',
    onClick: false,
    editComponent: markRaw(OverlayNumberField),
    ...props,
    type: 'number',
    component: markRaw(NumberComponent),
  })
  
export const dateColumn = <T>(props: PartialColumn<T, DateProps>): Column<DateProps, T>  => columnFn({
    getValue: (props: T) => undefined,
    header:  computed(() => 'Date'),
    sortable: true,
    searchable: true,
    align: AlignX.CENTER,
    gridSpace: 'min-content',
    onClick: false,
    editComponent: markRaw(OverlayDateField),
    ...props,
    type: 'date',
    component: markRaw(DateComponent),
});

export const chipColumn = <T>(props: PartialColumn<T, ChipProps>): Column<ChipProps, T>  => columnFn({  
    getValue: (props: T) => undefined,
    header: computed(() => 'Chip'),
    sortable: true,
    searchable: true,
    align: AlignX.CENTER,
    gridSpace: 'min-content',
    onClick: false,
    ...props,
    type: 'chip',
    component: markRaw(Chip),
  });

export const contextButtonColumn = <T>(props: PartialColumn<T, ContextButtonProps>): Column<ContextButtonProps, T>  => columnFn({ 
    classes: 'button-cell',
    getValue: (props: T) => undefined,
    header: computed(() => ''),
    sortable: false,
    searchable: false,
    align: AlignX.CENTER,
    gridSpace: 'var(--th-height)',
    editComponent: markRaw(ContextMenu),
    ...props,
    onClick: false,
    type: 'context-button',
    component: markRaw(ContextButton),
});

export const createColumn = <T, S>(type: Column<CommonProps, T>['type'], props: Column<CommonProps, T>) => {
  if (type === 'fold') return foldColumn(props as Column<FoldProps, T> & { subRows: SubTable<S> })
  if (type === 'checkbox') return checkboxColumn(props as Column<CheckboxProps, T>)
  if (type === 'text') textColumn(props as Column<TextProps, T>);
  if (type === 'number') numberColumn(props as Column<NumberProps, T>);
  if (type === 'date') dateColumn(props as Column<DateProps, T>);
  if (type === 'chip') chipColumn(props as Column<ChipProps, T>);
  if (type === 'context-button')  return contextButtonColumn(props as Column<ContextButtonProps, T>)
}
