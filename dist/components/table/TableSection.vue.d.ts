import { Column, ColumnId, Row, RowId, StoreOptions, SubStoreOptions, SubTableStore, TableId } from '../../types/tableTypes';
import { ComputedRef } from "vue";
import { CommonProps } from '../../types/cellTypes';
declare const _default: <T, S>(__VLS_props: ({
    options: StoreOptions<T, S>;
    rows: ComputedRef<Row[]>;
    subStores?: Map<string, SubTableStore<S>> | undefined;
    columns: readonly Column<CommonProps, T>[];
    data: Map<string, T>;
    tableId: TableId;
    "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
    "onUpdate:selected"?: ((rowId: string) => any) | undefined;
    activeColumn: ColumnId | undefined;
} | {
    options?: SubStoreOptions<S> | undefined;
    rows: Row[];
    columns: readonly Column<CommonProps, S>[];
    data: Map<string, S>;
    tableId: TableId;
    "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
    "onUpdate:selected"?: ((rowId: string) => any) | undefined;
    activeColumn: ColumnId | undefined;
}) & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    emit: {
        (e: 'update:allSelected', rowId: RowId[]): void;
        (e: 'update:selected', rowId: RowId): void;
    };
    slots: {};
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: ({
        options: StoreOptions<T, S>;
        rows: ComputedRef<Row[]>;
        subStores?: Map<string, SubTableStore<S>> | undefined;
        columns: readonly Column<CommonProps, T>[];
        data: Map<string, T>;
        tableId: TableId;
        "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
        "onUpdate:selected"?: ((rowId: string) => any) | undefined;
        activeColumn: ColumnId | undefined;
    } | {
        options?: SubStoreOptions<S> | undefined;
        rows: Row[];
        columns: readonly Column<CommonProps, S>[];
        data: Map<string, S>;
        tableId: TableId;
        "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
        "onUpdate:selected"?: ((rowId: string) => any) | undefined;
        activeColumn: ColumnId | undefined;
    }) & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: {
        (e: 'update:allSelected', rowId: RowId[]): void;
        (e: 'update:selected', rowId: RowId): void;
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: ({
            options: StoreOptions<T, S>;
            rows: ComputedRef<Row[]>;
            subStores?: Map<string, SubTableStore<S>> | undefined;
            columns: readonly Column<CommonProps, T>[];
            data: Map<string, T>;
            tableId: TableId;
            "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
            "onUpdate:selected"?: ((rowId: string) => any) | undefined;
            activeColumn: ColumnId | undefined;
        } | {
            options?: SubStoreOptions<S> | undefined;
            rows: Row[];
            columns: readonly Column<CommonProps, S>[];
            data: Map<string, S>;
            tableId: TableId;
            "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
            "onUpdate:selected"?: ((rowId: string) => any) | undefined;
            activeColumn: ColumnId | undefined;
        }) & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: {
            (e: 'update:allSelected', rowId: RowId[]): void;
            (e: 'update:selected', rowId: RowId): void;
        };
    } | undefined;
};
export default _default;
