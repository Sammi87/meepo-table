import { InputOverlayProps } from '../../types/inputTypes';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<InputOverlayProps<"date">>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date | undefined) => void;
    "close:input": (value: Date | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<InputOverlayProps<"date">>>> & {
    "onClose:input"?: ((value: Date | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Date | undefined) => any) | undefined;
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
