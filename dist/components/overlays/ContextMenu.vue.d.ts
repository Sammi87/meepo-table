import { ContextOption } from '../../types/inputTypes';
import { ColumnId, RowId } from '../../types/tableTypes';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    type: 'context-menu';
    rowId: RowId;
    columnId: ColumnId;
    positionData: DOMRect;
    contextOptions?: ContextOption[] | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "close:input": () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    type: 'context-menu';
    rowId: RowId;
    columnId: ColumnId;
    positionData: DOMRect;
    contextOptions?: ContextOption[] | undefined;
}>>> & {
    "onClose:input"?: (() => any) | undefined;
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
