import { CommonProps } from '../types/cellTypes';
import { Column, ColumnId } from '../types/tableTypes';
import { Ref } from "vue";
export declare const accordionizer: <P extends CommonProps>(table: Ref<HTMLElement>, minimized: Ref<ColumnId[]>, columns: readonly Column<P, any>[]) => void;
