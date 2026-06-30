export enum AlignX {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  SEARCH = 'search',
  DATE = 'date',
  EMAIL = 'email',
  TEL = 'tel',
  SELECT = 'select',
  MULTISELECT = 'multi-select'
}

export enum InputStatus {
  DISABLED = 'disabled',
  ERROR = 'error',
  OK = 'ok',
  SUCCESS = 'success',
}

export enum SortingDirection {
  ASCEND = 'ascend',
  DESCEND = 'descend'
}

export enum SortType {
  PAGE = 'page',
  TABLE = 'table'
}

export enum TransitionType {
  FADEUP = 'fade-up',
  NONE = 'none',
  OPACITY = 'opacity'
}

export enum BaseCell {
  FOLD = 'fold',
  CHECKBOX = 'checkbox',
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  CHIP = 'chip',
  CONTEXTBUTTON = 'contextbutton',
}

export enum InputCellType {
  TEXTINPUT = 'text',
  NUMBERINPUT = 'number',
  DATEINPUT = 'date',
  CHIPINPUT = 'chip',
  CONTEXT_MENU = 'context-menu',
  SELECTINPUT = 'select',
  MULTISELECT = 'multi-select',
}

export enum Injector {
 OPTIONS = 'options',
 ROWS = 'rows',
SUBSTORES = 'subStores',
COLUMNS = 'columns',
DATA = 'data',
RAWDATA = 'raw-data',
CONTROL = 'control',
TABLESERVICE = 'table-service',
READY = 'ready'
}