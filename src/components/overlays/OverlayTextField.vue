<script setup lang="ts">

import { InputOverlayProps } from '@/types/inputTypes';
import CellInputOverlay from './CellInputOverlay.vue';
import { ref, watch } from 'vue';
import { getFocusedElement, setFocusedElement } from '@/services/overlayService';

const props = defineProps<InputOverlayProps<'text'>>();

const emit = defineEmits<{
  (e:'update:modelValue', value: string ): void,
  (e:'close:input', value: string ): void
  (e:'abort:input', value: string ): void
}>();

const previousFocusedElement: HTMLElement | null = getFocusedElement();
const initialValue: string = props?.value ?? '';
const inputElement = ref<HTMLInputElement>();
const modelValue = ref<string>(props.value ?? '');

const returnElementValue = (): void => {
  if (previousFocusedElement) setFocusedElement(previousFocusedElement);
  emit('close:input', modelValue.value);
};
const updateValue = (ev: Event): void => {
  (ev.target as HTMLInputElement).value = modelValue.value
  emit('update:modelValue', (ev.target as HTMLInputElement).value);
}
const abortUpdate = (): void => {
  if (previousFocusedElement) setFocusedElement(previousFocusedElement);
  emit('abort:input', initialValue);
}

const unwatch = watch(inputElement, (c): void => {
  c?.focus();
  unwatch();
});
</script>

<template>
  <input
    ref="inputElement"
    v-model="modelValue"
    class="table-input text"
    :placeholder="props.placeholder ?? ''"
    @input="updateValue"
    @keypress.enter="returnElementValue"
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
    &:focus {
      outline: 1px solid var();
    }
  }
</style>
