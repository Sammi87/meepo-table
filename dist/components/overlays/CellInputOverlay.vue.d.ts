import { AlternativeValue, CellId, Column, TableId } from '../../types/tableTypes';
import { CommonProps } from '../../types/cellTypes';
declare const _default: <T, S, C extends string, P extends CommonProps, E>(__VLS_props: {
    columns: readonly Column<P, E>[];
    tableId: TableId;
    "onUpdate:cellValue"?: ((returnValue: {
        cellId: CellId;
        value: P["value"] | AlternativeValue<T, P, string>;
    }) => any) | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    emit: (e: 'update:cellValue', returnValue: {
        cellId: CellId;
        value: P["value"] | AlternativeValue<T, P, string>;
    }) => void;
    slots: {};
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        columns: readonly Column<P, E>[];
        tableId: TableId;
        "onUpdate:cellValue"?: ((returnValue: {
            cellId: CellId;
            value: P["value"] | AlternativeValue<T, P, string>;
        }) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: (e: 'update:cellValue', returnValue: {
        cellId: CellId;
        value: P["value"] | AlternativeValue<T, P, string>;
    }) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            columns: readonly Column<P, E>[];
            tableId: TableId;
            "onUpdate:cellValue"?: ((returnValue: {
                cellId: CellId;
                value: P["value"] | AlternativeValue<T, P, string>;
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: (e: 'update:cellValue', returnValue: {
            cellId: CellId;
            value: P["value"] | AlternativeValue<T, P, string>;
        }) => void;
    } | undefined;
};
export default _default;
