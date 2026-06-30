<script setup lang="ts">
import { SortingDirection } from '@/types/enums';

const props = 
  defineProps<{
    direction?: SortingDirection;
  }>()


</script>

<template>
  <svg
    class="sort-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path
      :class="['path', direction]"
      fill="transparent"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped lang="scss">
.sort-icon {
  width: var(--sort-arrow-size, 1rem);
  height: var(--sort-arrow-size, 1rem);
  overflow: visible;
}
.path {
  transition: all 0.5s ease;
  stroke: var(--th-sort-arrow-stroke);
  stroke-width: var(--sort-arrow-stroke-width);
  &.descend {
    d: path(var(--th-sort-descend-icon-path));
  }

  &.ascend {
    d: path(var(--th-sort-ascend-icon-path));
  }
}


</style>
