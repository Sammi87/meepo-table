<script setup lang="ts" generic="T, S">
import { ColumnId, HeaderColumn } from "@/types/tableTypes";
import { Injector, SortType, SortingDirection } from "@/types/enums";
import { computed, inject, ref } from "vue";
import { sortRows } from "@/filterUtils/sortRows";
import SortIcon from "@/assets/svg/SortIcon.vue";
import { InjectService } from "@/types/injectTypes";

const props = defineProps<HeaderColumn>();

const { columns, rows, options, control, updatePages } = inject(Injector.TABLESERVICE) as InjectService<T, S>;
const columnActive = (id: ColumnId) => control.activeColumn === id
const direction = computed<SortingDirection | undefined>(() =>
  columnActive(props.columnId) ? control.sortingDirection : undefined,
);
const onClick = (ev: Event) => {
  ev.preventDefault();
  if (!props.minimize && props.sortable) {
    sortRows(props.columnId.toString(), options?.locale, columns, rows.value, control);
    if(options.initialSorting?.sortingType !== SortType.PAGE) updatePages();
  }
};
</script>

<template>
  <th
    :class="[
      'ez-th',
      align,
      type,
      props.columnId,
      direction,
      sortable,
      { minimized: props.minimize },
      { active: columnActive(props.columnId) },
      { sortable: sortable },
    ]"
    :data-id="props.columnId"
    :data-hand-held-header="header"
    @click="onClick"
  >
    <span
      class="column-header"
    >{{ header }}</span>
    <transition name="sort">
      <SortIcon
        v-if="columnActive(props.columnId)"
        :direction="direction"
      />
    </transition>
    <Transition name="minimize">
      <svg
        v-if="minimize"
        class="svg-ellipsis"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path class="ellipsis" />
      </svg>
    </Transition>
  </th>
</template>

<style scoped lang="scss">
@import '@/assets/styles/transitions';
.ez-th {
  transition: padding 1s $easeoutquint;
  .column-header { 
    max-width: 100%;
    transition-property: max-width, transform, opacity;
    transition-duration: 1s;
    transition-timing-function: $easeoutquint;
  }
  &.minimized {
    padding: 0;
    justify-content: center;
  .column-header { 
    opacity: 0;
    max-width: 0%;
    transform: scale(0); }
  }
}
.sort-container,
.sort-icon {
  margin-left: .25rem;
  transform: scale(1);
}


.sort-enter-active,
.sort-leave-active {
  transition: all 0.25s ease;
}

.sort-enter-from,
.sort-leave-to {
  opacity: 0;
  width: 0;
  transform: scale(0);
}

.minimize-enter-active {
  transition: all .5s .25s $easeoutquint;
}
.minimize-leave-active {
  transition: all .5s $easeoutquint;
}
.minimize-enter-from,
.minimize-leave-to {
  opacity: 0;
  transform: scale(0) translateX(-50%);

}

.svg-ellipsis {
  position: absolute;
  left: 50%;
  transform: scale(1) translateX(-50%);
  transform-origin: center;
}
.ellipsis {
  transform: rotate(90deg);
  transform-origin: center;
  fill: var(--th-ellipsis-fill);
  d: path('M6 2a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0');
}

</style>
