import { AlignX, TransitionType } from "@/types/enums";
import { ContextOption, InputOverlayProps } from "@/types/inputTypes";
import { ref } from "vue";

/*
const useContextMenuService = () => {
  const parent = ref<HTMLElement | undefined>();
  const context = ref<ContextOption[]>();

  const open = (parentElement: HTMLElement, menuContext: ContextOption[]) => {
    parent.value = parentElement;
    context.value = menuContext;
  }
  const close = () => {
    parent.value = undefined;
    context.value = undefined;
  }
  return { open, close, parent, context }
}

export const contextMenuService = useContextMenuService();
*/
export const inputOverlayService = (<T extends string>() => {
  const componentProps = ref<InputOverlayProps<T>>();
  const parent = ref<HTMLElement | SVGElement>();
  const transition = ref<TransitionType>(TransitionType.FADEUP);

  const set = (data: InputOverlayProps<T>, _transition?: TransitionType): void => {
    componentProps.value = data;
    if (_transition) transition.value = _transition;
  }
  const close = () => {
    componentProps.value = undefined;
  }
  return { componentProps, parent, transition, set, close }
})()

export const placeMenu = (p: DOMRect, c: DOMRect, padding: number = 8, align: AlignX = AlignX.LEFT): { x: string, y: string } => {
  const w = {x: window.innerWidth, y: window.innerHeight}
  const x = p.left + p.width / 2 - c.width / 2;
  const y = p.y + p.height;
  return { x: `${x}px`, y: `${y}px` }
}

export const getFocusedElement = () => document.activeElement as HTMLElement ?? null;
export const setFocusedElement = (element: HTMLElement) => element.focus();

export const getBoundingBox = (parent: HTMLElement | SVGElement): DOMRect => parent?.getBoundingClientRect();
