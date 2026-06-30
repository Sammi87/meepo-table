import { Column, HeaderColumn, HeaderComponent, PartialColumn, SubTable } from '../../types/tableTypes';
import { CheckboxProps, ChipProps, CommonProps, ContextButtonProps, DateProps, FoldProps, NumberProps, TextProps } from '../../types/cellTypes';
export declare const columnFn: <C extends CommonProps, T>(props: Column<C, T>) => Column<C, T>;
export declare const headerColumnFn: <P extends HeaderColumn>(component: any) => any;
export declare const foldColumn: <T, S>(props: Partial<Column<FoldProps, S>> & {
    columnId: string;
} & {
    subTable?: SubTable<S> | undefined;
}) => Column<FoldProps, S> & {
    subTable?: SubTable<S> | undefined;
};
export declare const checkboxColumn: <T>(props: PartialColumn<T, CheckboxProps>) => Column<CheckboxProps, T>;
export declare const textColumn: <T>(props: PartialColumn<T, TextProps>) => Column<TextProps, T>;
export declare const numberColumn: <T>(props: PartialColumn<T, NumberProps>) => Column<NumberProps, T>;
export declare const dateColumn: <T>(props: PartialColumn<T, DateProps>) => Column<DateProps, T>;
export declare const chipColumn: <T>(props: PartialColumn<T, ChipProps>) => Column<ChipProps, T>;
export declare const contextButtonColumn: <T>(props: PartialColumn<T, ContextButtonProps>) => Column<ContextButtonProps, T>;
export declare const createColumn: <T, S>(type: string, props: Column<CommonProps, T>) => (Column<FoldProps, T> & {
    subTable?: SubTable<T> | undefined;
}) | Column<CheckboxProps, T> | Column<ContextButtonProps, T> | undefined;
