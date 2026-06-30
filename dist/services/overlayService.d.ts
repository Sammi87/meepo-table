import { AlignX, TransitionType } from '../types/enums';
import { InputOverlayProps } from '../types/inputTypes';
export declare const inputOverlayService: {
    componentProps: import("vue").Ref<InputOverlayProps<string> | undefined>;
    parent: import("vue").Ref<HTMLElement | SVGElement | undefined>;
    transition: import("vue").Ref<TransitionType>;
    set: (data: InputOverlayProps<string>, _transition?: TransitionType) => void;
    close: () => void;
};
export declare const placeMenu: (p: DOMRect, c: DOMRect, padding?: number, align?: AlignX) => {
    x: string;
    y: string;
};
export declare const getFocusedElement: () => HTMLElement;
export declare const setFocusedElement: (element: HTMLElement) => void;
export declare const getBoundingBox: (parent: HTMLElement | SVGElement) => DOMRect;
