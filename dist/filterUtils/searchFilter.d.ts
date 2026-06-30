import { Column, ControlObject, Row, RowId, SubTableStore } from '../types/tableTypes';
import { CommonProps } from '../types/cellTypes';
declare const _default: <T, S, P extends CommonProps>(filter: string, columns: Column<P, T>[], rows: Row[], control: ControlObject, subStores?: Map<string, SubTableStore<S>> | undefined) => void;
export default _default;
