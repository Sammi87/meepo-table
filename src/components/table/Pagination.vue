<script setup lang="ts" generic="T, S">
import { AlignX, Injector } from "@/types/enums";
import { InjectControl, InjectOptions } from "@/types/injectTypes";
import { Page } from "@/types/tableTypes";
import { computed, inject, onMounted, ref } from "vue";

const { control } = inject(Injector.CONTROL) as InjectControl;
const { options } = inject(Injector.OPTIONS) as InjectOptions<T, S>;

const align = options.pagination?.align ?? AlignX.RIGHT;
const trunkation = options.pagination?.pagesToShow ?? 5;
const goToFirstLast = options.pagination?.goToFirstLast ?? true;
const goToPrevNext = options.pagination?.goToPrevNext ?? true;

const paginationGroup = ref();
const pages = computed(() => {
  return [...control.paginationPages.values()];
});

const gotoPage = (ev: Event, pageIndex: number) => {
  ev?.preventDefault();
  control.activePageNumber = pageIndex;
  const page = control.paginationPages?.get(pageIndex)?.page;
  if (page) control.activePage = new Set(page);
  setTimeout(() => {
    paginationGroup.value.getElementsByClassName('active')?.[0]?.focus()
  }, 300);
} 

const pageSelection = computed(() => {  
  const l = pages.value.length;

  if (trunkation > l) {
    return pages.value.map((p, i) => ({
      id: p.id,
      type: 'page',
      fn: (ev: Event) => gotoPage(ev, i),
      value: (i + 1).toString(),
      active: control.activePageNumber === i,
    }));
  } else {
    const range = Math.ceil(trunkation / 2);
    let first = control.activePageNumber - range;
    let last = control.activePageNumber + range + (first < 0 ? Math.abs(first) : 0);
    first -= last > pages.value.length - 1 ? last - pages.value.length - 1 : 0;

    return pages.value.reduce((p: Page[], c, i) => {
      first < i && last >= i
      ? p.push({ id: c.id, type: 'page', fn: (ev) => gotoPage(ev, i), value: (i + 1).toString(), active: control.activePageNumber === i})
      : p?.[p.length - 1]?.type !== 'truncate'
      ? p.push({ id: 'truncate', type: 'truncate' })
      : p;

      return p
    }, [])
    .reduce((p: Page[], c, i, arr) => {
      p.push(c)
      if (i === 0 && control.activePageNumber !== 0 && goToPrevNext) p.unshift({id: 'back', type: 'back', fn: (ev) => gotoPage(ev, control.activePageNumber - 1) })
      if (i === 0 && control.activePageNumber > 1 && goToFirstLast) p.unshift({ id: 'first', type: 'first', fn: (ev) => gotoPage(ev, 0) })
      if (i === arr.length - 1 && control.activePageNumber !== pages.value.length - 1 && goToPrevNext) p.push( { id: 'next', type: 'next', fn: (ev) => gotoPage(ev, control.activePageNumber + 1) })
      if (i === arr.length - 1 && control.activePageNumber < pages.value.length - 2 && goToFirstLast) p.push({ id: 'last', type: 'last', fn: (ev) => gotoPage(ev, pages.value.length - 1) })

      return p
    }, []);
  }

});

onMounted(() => {
  gotoPage(undefined as unknown as Event, control.activePageNumber);
});

</script>

<template>
  <div
    ref="paginationGroup"
    :class="['pagination', align]"
  >
    <transition-group
      name="page-btn"
      appear
    >
      <button
        v-for="item in pageSelection"
        :key="item.id"
        :class="['pagination-btn', item.type, item.active ? 'active' : '']"
        :disabled="item.type === 'truncate'"
        @click="item.fn"
      >
        <template v-if="item.type !== 'page' && item.type !== 'truncate'">
          <svg
            viewBox="0 0 16 16"
            class="arrow"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              :class="[item.type === 'first' || item.type === 'back' ? 'arrow-left' : 'arrow-right', item.type === 'first' || item.type === 'last' ? 'double-arrow-path' : 'arrow-path']"
              d="M4 0, 12 8, 4 16"
            />
          </svg>
        </template>
        <template v-if="item.type === 'truncate'">
          ...
        </template>
        <template v-if="item.type === 'page'">
          {{ item.value }}
        </template>
      </button>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  height: 2.5rem;
  &.left {
    justify-content: flex-end;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }
}

.hidden-pages,
.pagination-btn {
  display: grid;
  justify-content: center;
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  user-select: none;
  color: var(--td-color);
  font-size: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  padding: 0;
  margin-left: .25rem;
  &.hide {
    display: none;
  }

  &.active,
  &:not(.hidden-pages):hover {
    color: var(--pagination-active-color);
    background-color: var(--pagination-background-active-color);
  }
}

.arrow { width: 16px;
  height: 16px;
  stroke-width: 2px;
  stroke: var(--pagination-arrow-color);
  fill: transparent;
  .arrow-path {
    d: var(--pagination-arrow-path);
  }
  .double-arrow-path {
    d: var(--pagination-double-arrow-path);
  }
}

.arrow-left {
  transform: scale(-1);
  transform-origin: center;
}

.page-btn-enter-active,
.page-btn-leave-active {
  position: relative;
  inset: 0;
  transition: all 0.25s ease;
  transform-origin: center;
}
.page-btn-enter-from {
  inset: 1.25rem 0 0 -1.25rem;
}
.page-btn-leave-to {
  inset: 1.25rem 0 0 1.25rem;
}
.page-btn-enter-from,
.page-btn-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
  margin-left: 0rem !important;
  overflow: hidden;
  transform: scale(0);
}
</style>
