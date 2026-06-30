import { InputOverlayProps } from '../../types/inputTypes';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<InputOverlayProps<"text">>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    "close:input": (value: string) => void;
    "abort:input": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<InputOverlayProps<"text">>>> & {
    "onAbort:input"?: ((value: string) => any) | undefined;
    "onClose:input"?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
