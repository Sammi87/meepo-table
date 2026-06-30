<script setup lang="ts">

import { InputOverlayProps } from '@/types/inputTypes';
import CellInputOverlay from './CellInputOverlay.vue';
import { ref, watch } from 'vue';
import { getFocusedElement, setFocusedElement } from '@/services/overlayService';

const props = defineProps<InputOverlayProps<'number'>>();

const emit = defineEmits<{
  (e:'update:modelValue', value: number | undefined ): void,
  (e:'close:input', value: number | undefined ): void
}>();

const previousFocusedElement: HTMLElement | null = getFocusedElement();
const initialValue: string = props.value?.toString() ?? '';
const inputElement = ref<HTMLInputElement>();
const modelValue = ref<number | undefined>(props.value)

const returnElementValue = (): void => { 
  if (previousFocusedElement) setFocusedElement(previousFocusedElement);
  emit('close:input', modelValue.value);
};
const updateValue = (ev: Event): void => {
  (ev.target as HTMLInputElement).value = modelValue.value?.toString() ?? '';
  emit('update:modelValue', modelValue.value);
}
const abortUpdate = (): void => {
  if (previousFocusedElement) setFocusedElement(previousFocusedElement);
  emit('close:input', parseInt(initialValue) ?? undefined);
}
const unwatch = watch(inputElement, (c): void => {
  c?.focus();
  unwatch();
});

</script>
<template>
  <input
    ref="inputElement"
    v-model.number="modelValue"
    class="table-input number"
    :placeholder="props.placeholder ?? ''"
    @input="updateValue"
    @keyup.enter="returnElementValue"
    @keydown.esc="abortUpdate"
    @focusout="returnElementValue"
  />
</template>

<style scoped lang="scss">
  .table-input {
    background-color: transparent;
    border: none;
    border-radius: .125rem;
    color: var(--td-color);
    font-family: inherit;
    font-size: var(--td-font-size);
    font-weight: var(--td-font-weight);
    inset: -1px;
    padding: 0 var(--cell-padding-horizontal);
    position: absolute;
    text-align: right;
    box-sizing: border-box;
    &:focus {
      outline: 1px solid var();
    }
  }
</style>
