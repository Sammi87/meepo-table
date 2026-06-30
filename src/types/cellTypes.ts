import { AlignX } from "@/types/enums";
import Checkbox from "@/components/cells/Checkbox.vue";
import Chip from "@/components/cells/Chip.vue";
import Fold from "@/components/cells/Fold.vue";
import Text from "@/components/cells/Text.vue";
import ContextButton from "@/components/cells/ContextButton.vue";
import { Color } from "@/types/genericTypes";
import { ColumnId, RowId, TableId } from "./tableTypes";

export interface Common {
  readonly columnId: ColumnId;
  readonly rowId: RowId;
  onClick?: (columnId: ColumnId, rowId: RowId) => void;
}

export interface CharacterContent extends Common {
  align?: AlignX;
}

export interface FoldProps extends Common {
  readonly type: 'fold';
  value: boolean;
}

export interface CheckboxProps extends Common {
  readonly type: 'checkbox',
  value?: boolean;
  indeterminate?: boolean;
  onUpdate?: (rowId: RowId) => void;
}

export interface TextProps extends CharacterContent {
  readonly type: 'text',
  value: string | undefined;
  format?: (val: any) => string;
}

export interface NumberProps extends CharacterContent {
  readonly type: 'number',
  value: number | undefined;
  format?: (val: any) => string;
}

export interface DateProps extends CharacterContent {
  readonly type: 'date',
  value: Date | number | undefined;
  format?: (val: any) => string;
}

export interface ChipProps extends Common {
  readonly type: 'chip',
  value: string | number | undefined;
  statusColor: Color;
}

export interface ContextButtonProps extends Common {
  readonly type: 'context-button',
  path?: string;
  options: { label: string; action: () => void }[];
}

export type BaseCellType = 'fold' | 'checkbox' | 'text' | 'number' | 'date' | 'chip' | 'context-button';
export type BaseCellComponent = typeof Checkbox | typeof Chip | typeof Fold | typeof Text | typeof ContextButton;

export type Cell<T extends string> = Omit<CommonProps, 'tableId'> & {
  readonly type: T,
  readonly columnId: ColumnId;
  readonly rowId: RowId;
  value?: any
};

export type CommonProps = {
  readonly type: string;
  readonly tableId?: TableId | RowId;
  readonly rowId?: RowId;
} & Record<any, any>