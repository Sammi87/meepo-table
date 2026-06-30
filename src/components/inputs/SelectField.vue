<script setup lang="ts">
import InputBase from "@/components/inputs/InputBase.vue";
import { InputType } from "@/types/enums";
defineProps<{
  label: string,
}>()
</script>

<template>
  <InputBase
    v-bind="{
      type: InputType.SELECT,
      label,
    }"
  >
    <select>
      <option>option</option>
    </select>
  </InputBase>
</template>