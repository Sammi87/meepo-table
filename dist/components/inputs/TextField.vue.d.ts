import { InputValidation as InputValidationType } from '../../types/inputTypes';
import { InputStatus, InputType } from '../../types/enums';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id: string;
    modelValue?: string | undefined;
    placeholder?: string | undefined;
    validation?: InputValidationType | undefined;
    type?: InputType | undefined;
    label?: string | undefined;
    status?: InputStatus | undefined;
    infoText?: string | undefined;
}>, {
    modelValue: string;
    id: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id: string;
    modelValue?: string | undefined;
    placeholder?: string | undefined;
    validation?: InputValidationType | undefined;
    type?: InputType | undefined;
    label?: string | undefined;
    status?: InputStatus | undefined;
    infoText?: string | undefined;
}>, {
    modelValue: string;
    id: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    id: string;
    modelValue: string;
}, {}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
