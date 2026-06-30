<script setup lang="ts">
import { InputValidation as InputValidationType } from "@/types/inputTypes";
import InputBase from "@/components/inputs/InputBase.vue";
import { InputStatus, InputType } from "@/types/enums";
import { computed } from "vue";
import { uid } from "@/utils/generalUtils";
import { runValidation } from "@/services/InputValidationService";

const props = withDefaults(
  defineProps<{
    id: string;
    modelValue?: string;
    placeholder?: string;
    validation?: InputValidationType;
    type?: InputType;
    label?: string;
    status?: InputStatus;
    infoText?: string;
  }>(),
  {
    modelValue: "",
    id: uid(),
  }
);

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const validation = computed(() => runValidation(props.validation));
</script>

<template>
  <InputBase
    v-bind="{
      type,
      label,
      status: validation.status,
      infoText: validation.msg,
    }"
  >
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </InputBase>
</template>

<style scoped lang="scss">
input {
  background-color: transparent;
  border: none;
  width: 100%;
  font-size: 16px;
  color: var(--input-field-color);
  &[type="search"]:focus-visible {
    outline: none;
  }
}
</style>
