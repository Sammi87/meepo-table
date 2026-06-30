import { CellId, RowId, Table, TableService } from '../../types/tableTypes';
declare const _default: <T, S>(__VLS_props: {
    table: Table<T, S>;
    data: T[] | undefined;
    "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
    "onUpdate:selected"?: ((rowId: string) => any) | undefined;
    "onUpdate:cellValue"?: ((returnValue: {
        cellId: CellId;
        value: any;
    }) => any) | undefined;
    onTableService?: ((service: TableService<T, S>) => any) | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    emit: {
        (e: 'update:allSelected', rowId: RowId[]): void;
        (e: 'update:selected', rowId: RowId): void;
        (e: 'update:cellValue', returnValue: {
            cellId: CellId;
            value: any;
        }): void;
        (e: 'tableService', service: TableService<T, S>): void;
    };
    slots: {
        filters?(_: {}): any;
    };
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        table: Table<T, S>;
        data: T[] | undefined;
        "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
        "onUpdate:selected"?: ((rowId: string) => any) | undefined;
        "onUpdate:cellValue"?: ((returnValue: {
            cellId: CellId;
            value: any;
        }) => any) | undefined;
        onTableService?: ((service: TableService<T, S>) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        filters?(_: {}): any;
    };
    emit: {
        (e: 'update:allSelected', rowId: RowId[]): void;
        (e: 'update:selected', rowId: RowId): void;
        (e: 'update:cellValue', returnValue: {
            cellId: CellId;
            value: any;
        }): void;
        (e: 'tableService', service: TableService<T, S>): void;
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            table: Table<T, S>;
            data: T[] | undefined;
            "onUpdate:allSelected"?: ((rowId: string[]) => any) | undefined;
            "onUpdate:selected"?: ((rowId: string) => any) | undefined;
            "onUpdate:cellValue"?: ((returnValue: {
                cellId: CellId;
                value: any;
            }) => any) | undefined;
            onTableService?: ((service: TableService<T, S>) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            filters?(_: {}): any;
        };
        emit: {
            (e: 'update:allSelected', rowId: RowId[]): void;
            (e: 'update:selected', rowId: RowId): void;
            (e: 'update:cellValue', returnValue: {
                cellId: CellId;
                value: any;
            }): void;
            (e: 'tableService', service: TableService<T, S>): void;
        };
    } | undefined;
};
export default _default;
