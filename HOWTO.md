# How to

**Table of content**
---
<!-- vscode-markdown-toc -->
[Project setup](#Projectsetup) \
[Example setup](#Examplesetup) \
[Columns](#Columns) \
[Table Options](#TableOptions) \
[Emitters](#Emitters) \
[CSS Variables](#CSSVariables) \
[Default neutral spectrum variables](#Defaultneutralspectrumvariables) \
[Default purple color spectrum variables](#Defaultpurplecolorspectrumvariables) \
[Color variables](#Colorvariables)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

<br/>

## <a name='Projectsetup'></a>Project setup
<br/>

**package.json**
```
"ez-table": "git+https://oauth2:YOUR_ACCESS_TOKEN@gitlab.com/meepoab/component-library/ezt.git#commit-or-branch-or-tag"
```
<br/>

**main.ts**

```
import 'ez-table/style.css'; 
import '../node_modules/ez-table/dist/_ez-styles.scss';
```
<br/>

**Vite.config.ts (leaving any variable out equals false)**

```
css: {
  preprocessorOptions: {
    scss: {
      additionalData: ￼`￼
        $tablet-max-width: number + px;
        $mobile-max-width: number + px;
        $light-theme: boolean;
        $dark-theme: boolean;
        $theme: 'blue' | 'green | 'purple' | 'red';
      ￼`￼
    }
  }
},
```
<br/>

**Vue file**

 ```
 import { EZTable, EZTableType } from ‘ez-table’;
 ```
<br/>

## <a name='Examplesetup'></a>Example setup

Let’s say we have an object looking like the type bellow:

```
type MySubDataType = { type: string, cough: string, dentures: string };

type MyDataType = {
  id: string,
  firstname: string,
  lastname: string,
  fingers: number,
  luckyDate: Date,
  favoriteColor: Color,
  extraData?: MySubDataType[]
} 
```

We want four columns: \
• name \
• fingers \
• lucky \
• date \
• favourite color

If extraData array exists a subrow should be created for each entry.
We also want to format the data displayed in the table a bit and there might be more rows to come so the we want pagination.

**myTable.vue**

```
<script setup lang="ts">
import { EZTable, EZTableType } from "ez-table";
import { estimateColor } from '@/utils/formatters...';
import { MyDataType, MySubDataType, myData } from '@/data/...';

const table: EZTableType<myDataType, MySubDataType> = {
  columns: [
    foldColumn({}),
    textColumn({
      header: 'Name',
      gridSpace: 'auto',
      onClick: true,
      getValue: (r) => `${r.firstname} ${r.lastname}`,
    }),
    numberColumn({
      header: 'Fingers',
      gridSpace: 'auto',
      onClick: true,
      getValue: (r) => r.fingers
    }),
    dateColumn({
      header: ' Lucky date',
      gridSpace: 'auto',
      onClick: true,
      getValue: (r) => r.luckyDate,
      getProps: () => ({ format: formatDate })
    }),
    chipColumn({
      header: 'Favorite Color',
      gridSpace: 'auto',
      getValue: (r) => estimateColor(r.favoriteColor),
      getProps: (r) => ({
        statusColor: r.favoriteColor,
      }),
    }),
    contextButtonColumn({
      getProps: (r) => ({
        options: [
          {label: 'one item', action: () => console.log('click 1')},
          {label: 'two item', action: () => console.log('click 2')}
        ]
      })
    })
  ],
  subTable: {
    columns: [
      textColumn({
        getValue: (s) => s.type
      }),
      textColumn({
        getValue: (s) => s.dentures
      }),
      textColumn({
        getValue: (s) => s.cough
      }),
    ],
    data: (r: MockType) => r.extraData as SubData[],
    options: {
      hideHeaderCells: true,
    },
  },
  data: myData,
  options: {
 searchFilter: true,
   selectable: true,
   pagination: { rowsPerPage: 4 },
   inputBorders: true,
  }
};
</script>

<template>
    <EZTable :table="table" />
</template>
```

You should now have a table. If you don’t you did something wrong.  :)

<br/>

## <a name='Columns'></a>Columns
**Type:** Column<P extends CommonProps, T> \
All none generic types are imported from ez-table
|Attribute | Type | Description |
| --- | --- | --- |
| **columnId** | |ColumnId | A unique string |
| component | EZComponent<<span>P</span>> | A component wrapped in Vue:s function markRaw, where P is the components props. |
| **type:** | string | A descriptive string linked to the specific column type, e.g. text, chip, context-button…, can also be an Enum |
| **gridSpace:** | string | Defines the css grid value the column will have |
| **getValue:** | (v: T) =>   | D |
| <br/><br/> <i style="white-space: nowrap">Optional definitions</i> |
| **editComponent:** | EZComponent<<span>P</span>> | component used as an overlay if editing values enabled. Note that this is not needed if the component handles manipulation by itself, e.g. a Checkbox or a Fold component.| 
| **getProps** | (function) | A function to deliver additional props to the component if needed.
| **align** | AlignX | The cells text alignment |
| **filter** | ——Unclear—— | |
| **header:** | string | The column header |
| **searchable:** | boolean | added to filtering if enabled |
| **sortable:** | boolean | column sortable if enabled |
| **visible:** | boolean | Option to hide column |
| **onClick:** | function or boolean | Custom function or build in handler if set to true. |

### <a name='Builtincolumns'></a>Built in columns

There are currently (2023/12/24) 7 built in column types. \
All columns get a unique columnId if nothing else is specified, this needs to be added to any custom column created as well.

###### Checkbox - *checkboxColumn()*

| Attribute | Default Value | Description |
| --- | --- | --- |
| getValue | (value: T) => false | |
| header | “” | |
| sortable | false | |
| searchable | false | |
| align | AlignX.CENTER | |
| gridSpace | 'var(--th-height)' | |
| type | 'checkbox' | |
| component | markRaw(Checkbox) | |

###### Chip - *chipColumn()*

| Attribute | Default Value | Description |
| --- | --- | --- |
getValue: (value: T) => undefined,
header: 'Chips',
sortable: true,
searchable: true,
align: AlignX.CENTER,
gridSpace: 'min-content',
onClick: false,
type: 'chip',
component: markRaw(Chip),

#### <a name='Contextbutton-contextButtonColumn'></a>Context button - *contextButtonColumn()*

| Attribute | Default Value | Description |
| --- | --- | --- |
getValue: (value: unknown) => undefined,
header: '',
sortable: false,
searchable: false,
align: AlignX.CENTER,
gridSpace: 'var(--th-height)',
onClick: false,
type: 'context-button',
component: markRaw(ContextButton),

#### <a name='Date-dateColumn'></a>Date - *dateColumn()*

| Attribute | Default Value | Description |
| --- | --- | --- |
getValue: (value: unknown) => undefined,
header: 'Date',
sortable: true,
searchable: true,
align: AlignX.CENTER,
gridSpace: 'min-content',
onClick: false,
editComponent: markRaw(OverlayDateField),
type: 'date',
component: markRaw(DateComponent),

#### <a name='Fold-foldColumn'></a>Fold - *foldColumn()*

| Attribute | Default Value | Description |
| --- | --- | --- |
getValue: (props) => false,
header: '',
sortable: false,
searchable: false,
align: AlignX.CENTER,
gridSpace: 'var(--th-height)',
type: 'fold',
component: markRaw(Fold),

#### <a name='Number-numberColumn'></a>Number - *numberColumn()*

| Attribute | Default Value | Description |
| --- | --- | --- |
getValue: (value: unknown) => undefined,
header: 'Number',
sortable: true,
searchable: true,
align: AlignX.RIGHT,
gridSpace: 'min-content',
onClick: false,
editComponent: markRaw(OverlayNumberField),
type: 'number',
component: markRaw(NumberComponent),

#### <a name='Text-textColumn'></a>Text - *textColumn()*

| Attribute | Default Value | Description |
| --- | --- | --- |
getValue: (value: unknown) => “”,
header: 'Text',
sortable: true,
searchable: true,
align: AlignX.LEFT,[[
gridSpace: 'auto',
onClick: false,
editComponent: markRaw(OverlayTextField),
type: 'text',
component: markRaw(Text),

### <a name='Usage'></a>Usage

All column functions can be imported directly or the createColumn function can be used for all built in column types, e.g:

`textColumn({props…});`
or
`createColumn(‘type’, {props});`

### <a name='Creatingyourowncolumn'></a>Creating your own column

A function called columnFn fund in ez-table is used to create columns. You don’t have to use it but there is a better chance of getting it right if you do.

#### <a name='Compulsorypropertiesinacolumntype--fold:true--'></a>Compulsory properties in a column type<!-- {"fold":true} -->

```
readonly columnId: ColumnId;
readonly type: string;
onClick?: (columnId: ColumnId, rowId: RowId) => void;
```

```
const myColumn = <T>(props?: Partial<Column<MyComponentPropType, T>>): Column<MyComponentPropType, T>  => columnFn({ 
 columnId:  ￼`￼colId.${uid()}￼`￼,
 gridSpace: ‘auto’,
 getValue: (Function) A function used to construct the components value.
 ...props,
 component: myColumnComponent,
 type: ‘myType’,
})
```

**(uid is a help function imported from “ez-table” that generate a “unique” string, it can be anything as long as it’s unique)*

## <a name='TableOptions'></a>Table Options

filter?: Filter[];
hideHeaderCells?: boolean;
inheritSorting?: boolean;
initialSortingColumn?: string;
inputBorders?: boolean;
pagination?: Pagination;
searchFilter?: ((filter: string, store: TableStore<T>) =>  void) | boolean;
selectable?: boolean;
accordion?: boolean;

## <a name='Emitters'></a>Emitters
### <a name='get:tableService'></a>get:tableService
```
TableService<T, S> = {
  store: TableStore<T, S>;
  controlObject: ControlObject;
  checkRow: (rowId: RowId) => void;
  getActiveColumn: () => ColumnId;
  getCell: (rowId: RowId, columnId: ColumnId) => Cell<string>;
  getColumn: (columnId: ColumnId) => Column<CommonProps, T>
  getColumnIndex: (columnId: ColumnId) => number | undefined;
  getRow: (rowId: RowId) => Row;
  getRowIndex: (rowId: RowId) => number;
  getTopLevelVisibleRowIds: () => Set<RowId>;
  hasSubRows: (rowId: RowId) => boolean;
  toggleFold: (rowId: RowId) => void;
  subTableIsOpen: (rowId: RowId) => boolean;
  updateCellValue: <V>(rowId: RowId, columnId: ColumnId, value: V) => void;
  updatePages: () => void;
  isTableStore: <T, S>(props: TableStore<T, S> | SubTableStore<S>) => boolean
}
```

### <a name='get:controlObject'></a>get:controlObject
```
ControlObject = {
  activePage: Set<RowId>;
  activePageNumber: number;
  filteredRows: Set<RowId>;
  paginationPages: Map<number, { id: string, page: RowId[] }>;
  rowsSelected: Set<RowId>;
  sortingDirection?: SortingDirection;
  subTablesVisible: Set<RowId>;
  tableId: string;
}
```

### <a name='get:tableStore'></a>get:tableStore

| attribute | Type |
| --- | --- |
| activeColumn | ColumnId | undefined |
| columns | Column<CommonProps, T>[] |
| data | Map<RowId, T> |
| rows | Row[] |
| subStores? | Map<RowId, SubTableStore<S>> |
| tableId | TableId |
| options | StoreOptions<T, S> |



### <a name='monitor:store'></a>monitor:store
used to monitor changes in the controlObject
```
controlStore: () => void
```

### <a name='monitor:control'></a>monitor:control
used to monitor changes in the controlObject
```
controlMonitor: () => void
```

### <a name='monitor:data'></a>monitor:data
used to monitor changes in the current data
```
controlData: () => void
```

### <a name='update:selected'></a>update:selected
updates when a row is selected, RowId

### <a name='update:allSelected'></a>update:allSelected
updates when a row is selected, (Set<RowId>)


## <a name='CSSVariables'></a>CSS Variables

#### <a name='Table'></a>Table

  --table-border-radius

#### <a name='Th'></a>Th

  --th-height

  --cell-padding-horizontal

  --th-font-size
  --th-font-weight: 600;

  --th-sort-descend-icon-path: "M8 3, 8 3, 8 3M8 2V14M12 10, 8 14, 4 10";
  --th-sort-ascend-icon-path: "M12 6, 8 2, 4 6M8 2V14M8 13, 8 13, 8 13";

#### <a name='Td'></a>Td

  --td-height: 44px;

  --td-font-size: 16px;
  --td-font-weight: 400;

#### <a name='Contextbutton'></a>Context button

  --table-context-button-radius: 50%;

#### <a name='Contextmenu'></a>Context menu

  --context-menu-padding: 8px 0;
  --context-menu-radius: 4px;
  --context-menu-item-padding: 0 16px;
  --context-menu-item-height: 40px;
  --context-menu-shadow: 0 1px 2px rgba(0, 0, 0, 0.24),
  0 2px 4px rgba(0, 0, 0, 0.12),
  0 4px 8px rgba(0, 0, 0, 0.06),
  0 8px 16px rgba(0, 0, 0, 0.03);

#### <a name='Checkbox'></a>Checkbox

  --table-checkbox-size: 20px;
  --table-checkbox-radius: 3px;
  --table-check-size: 12px;

#### <a name='Foldarrow'></a>Fold arrow

  --fold-icon-size: 10px;
  --fold-icon-stroke-width: 3;
  --fold-arrow-path: path("M4 0, 12 8, 4 16");  

#### <a name='Input-field'></a>Input-field

  --input-field-border-radius

#### <a name='Pagination'></a>Pagination
| Variable | Value |
| --- | --- |
| --pagination-arrow-path: | path("M4 2, 11 8, 4 14"); |
| --pagination-double-arrow-path: | path("M0 2, 7 8, 0 14M9 2, 15 8, 9 14"); |

### <a name='Defaultneutralspectrumvariables'></a>Default neutral spectrum variables
| Variable | Value |
| --- | --- |
| --n-100: | hsl(325, 12%, 10%); |
| --n-200: | hsl(325, 8%, 15%); |
| --n-300: | hsl(325, 9%, 26%); |
| --n-400: | hsl(325, 10%, 40%); |
| --n-500: | hsl(325, 10%, 65%); |
| --n-600: | hsl(325, 10%, 85%); |
| --n-700: | hsl(325, 10%, 90%); |
| --n-800: | hsl(325, 10%, 95%); |
| --n-900: | hsl(325, 10%, 98%); |
| --w: | hsl(0, 0%, 100%); |
| --b: | hsl(0, 0%, 0%); |

### <a name='Defaultpurplecolorspectrumvariables'></a>Default purple color spectrum variables

--p-100 \
--p-200 \
--p-300 \
--p-400 \
--p-500 \
--p-600 \
--p-700 \
--p-800 \
--p-900 \

### <a name='Colorvariables'></a>Color variables

#### <a name='Table-1'></a>Table

 --table-border-color

#### <a name='Th-1'></a>Th

  --th-background-color
  --th-background-color-hover
  --th-color
  --th-color-hover
  --th-border-color
  --th-sort-arrow

#### <a name='Td-1'></a>Td

  --td-background-color
  --td-background-color-hover
  --td-color
  --td-border-color
  --td-edit-active

#### <a name='Contextbutton-1'></a>Context button

  --table-context-button
  --table-context-button-hover
  --table-context-button-active
  --table-context-button-bkg
  --table-context-button-bkg-hover
  --table-context-button-bkg-active

#### <a name='Contextmenu-1'></a>Context menu

  --context-menu-color
  --context-menu-bkg
  --context-menu-item-bkg-hover

#### <a name='Checkbox-1'></a>Checkbox

  --table-checkbox-color
  --table-checkbox-hover-color

#### <a name='Foldarrow-1'></a>Fold arrow

  --fold-icon-color

#### <a name='Subrow'></a>Subrow

  --subrow-background-color

#### <a name='Focus'></a>Focus

  --focus-color
  --focus-visible-color
  
#### <a name='Pagination-1'></a>Pagination

  --pagination-background-active-color
  --pagination-active-color

  --pagination-arrow-color

#### <a name='Inputfield'></a>Inputfield

  --input-label-font-weight
  --input-label-color
  --input-field-background-color
  --input-field-border-color
  --input-field-border-color-hover
  --input-field-color
  --input-field-placeholder
  --input-field-icon