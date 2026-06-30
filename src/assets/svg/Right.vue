<script setup lang="ts">
import { getCssVar } from '@/utils/generalUtils';
const props = defineProps<{
  colorVar: string,
  size: number | string
}>();
const color = getCssVar(props.colorVar);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
  >
    <path
      d="M6 2, 12 8, 6 14"
      :stroke="color"
    />
  </svg>
</template>