import { InputType, InputStatus } from "@/types/enums";
import { ColumnId, EZComponent, RowId, TableId } from "./tableTypes";
import { Cell } from "./cellTypes";

export type InputValidation = (arg: Record<string, unknown>) => { status: InputStatus, msg: string | undefined }

export type ContextOption = { label: string; action: () => void };
export type InputCellOptions = { type: InputType, modelValue: string, placeholder?: string }

export type InputBase = {
  type?: InputType
  label?: string;
  status?: InputStatus;
  infoText?: string;
}

export type TextFieldProps = {
  modelValue?: string;
  placeholder?: string;
  validation?: InputValidation;
} & InputBase;

export type Position = { top: string, width: string, height: string, left: string }

export interface InputOverlayProps<T extends string>  {
  readonly type: T;
  readonly rowId: RowId;
  readonly columnId: ColumnId;
  positionData: DOMRect;
  contextOptions?: ContextOption[];
  placeholder?: string;
  useBackground?: boolean;
  validation?: InputValidation;
  value?: Cell<T>['value'];
}

export type EditMode = { columnId: ColumnId, rowId: RowId };