<script setup lang="ts">
import { ChipProps } from "@/types/cellTypes";
import { hexToRgb, lumen } from "@/utils/generalUtils";

const props = withDefaults(
  defineProps<ChipProps>(),
  {
    statusColor: "hsl(325, 50%, 90%)",
  },
);
const { r , g, b } = hexToRgb(props.statusColor);
const textColor =  lumen(r, g, b) < .5 ? 'white' : 'black';
</script>

<template>
  <div class="chip">
    <span
      class="chip-text"
      :style="{color: textColor }"
    >{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
.chip {
  display: flex;
  align-items: center;
  padding: 2px 16px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  color: var(--p-400);
  color: v-bind(statusColor);
  text-transform: uppercase;
  background-color: currentColor;
  user-select: none;
  @if variable-exists(mobile-max-width) {
    @media only screen and (max-width: $mobile-max-width) {
      font-size: 10px;
      line-height: 16px;
      padding: 0 8px;
    }
  }
}

</style>
