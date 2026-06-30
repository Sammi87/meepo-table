<script setup lang="ts">

import { InputOverlayProps } from '@/types/inputTypes';
import { ref, watch } from 'vue';
import { getFocusedElement, setFocusedElement } from '@/services/overlayService';
import { focusAdjcentElement, formatDate } from '@/utils/generalUtils';

const props = defineProps<InputOverlayProps<'date'>>();

const emit = defineEmits<{
  (e:'update:modelValue', value: Date | undefined ): void,
  (e:'close:input', value: Date | undefined ): void
}>();

const previousFocusedElement: HTMLElement | null = getFocusedElement();
const initialValue: string = props.value ? formatDate(props.value) : '';
let tab: boolean = false;
const inputElement = ref<HTMLInputElement>();

const modelValue = ref<string>(initialValue);

const error = ref(false);

const checkYear = (year: string) => {
  const yearFns = [
  (n: string) => parseInt(n) === 1 || parseInt(n) === 2,
  (n: string) => parseInt(n) === 19 || parseInt(n) === 20,
  (n: string) => typeof parseInt(n.slice(-1)) === 'number',
  (n: string) => typeof parseInt(n.slice(-1)) === 'number',
];
  const y = year.split('').reduce((p, c, i) => yearFns[i](p + c) ? p + c : p, '');
  return y.length === year.length;
}

const getElemAndValue = (ev: Event) => ({event: ev as KeyboardEvent, element: (ev.target as HTMLInputElement), value: (ev.target as HTMLInputElement).value.replace(/[^\d-]/g, '')});

const removeLast = (value: string) => value.slice(0, value.length-1);
const backSpace = (ev: Event) => {
  const {event, element, value } = getElemAndValue(ev);
  if(value.slice(-1) === '-') modelValue.value = removeLast(value);
}

const enter = async (): Promise<void> => {
  try {
    formatDate(new Date(modelValue.value))
    emit('close:input', new Date(modelValue.value));
  } catch {
    await onError();
    emit('close:input', initialValue ? new Date(initialValue) : undefined);
  }
  if (previousFocusedElement && !tab) setFocusedElement(previousFocusedElement);
};

const onInput = (ev: Event): void => {
  const {event, value} = getElemAndValue(ev);
  if(event.key === 'backspace' || event.key === 'enter') return;
  let v = value.replace(/[^\d-]/g, '').slice(0, 10)
  if (/\d/.test(v.slice(4, 5))) v = v.slice(0, 4) + '-' + v.slice(4, v.length);
  if (/\d/.test(v.slice(7, 8))) v = v.slice(0, 7) + '-' + v.slice(7, v.length);
  if (modelValue.value.length >= 10 && new Date(modelValue.value).valueOf()) {
    emit('update:modelValue', new Date(modelValue.value));
      return;
    } else {
      v = v.slice(0, 9);
  }

  modelValue.value = v;
}

const updateValue = (ev: Event): void => {
  const { event, value } = getElemAndValue(ev);
  if(event.key === 'backspace' || event.key === 'enter') return;
  const p = value.split('-');
  if(!checkYear(p[0])) modelValue.value = removeLast(value.slice(0,4))
  if(parseInt(p[1]) > 12) modelValue.value = p[0];
}

const abortUpdate = (): void => {
  if (previousFocusedElement) setFocusedElement(previousFocusedElement);
  emit('close:input', initialValue ? new Date(initialValue) : undefined);
}

const onError = async () => {
  error.value = true;
  await new Promise((resolve) => {
    setTimeout(() => error.value = false, 1);
    setTimeout(() => resolve('resolved'), 500);
  });
}

const tabkey = (event: Event, direction: 'forwards' | 'backwards') => {
  event.preventDefault();
  event.stopImmediatePropagation();
  tab = true;
  focusAdjcentElement(previousFocusedElement, direction === 'forwards' ? 1 : -1);
  enter();
}

const blur = (event: Event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  if (!tab) enter();
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
    class="table-input date"
    placeholder="yyyy-mm-dd"
    :class="{ 'error': error }"
    @input="onInput"
    @keyup="updateValue"
    @keyup.backspace="backSpace"
    @keyup.enter="enter"
    @keydown.esc="abortUpdate"
    @keydown.exact.tab="(ev) => tabkey(ev, 'forwards')"
    @keydown.shift.tab="(ev) => tabkey(ev, 'backwards')"
    @focusout="blur"
  />
</template>

<style scoped lang="scss">
  .table-input {
    background-color: var(--td-edit-active);
    border-radius: .125rem;
    border: none;
    color: var(--td-color);
    font-family: inherit;
    font-size: var(--td-font-size);
    font-weight: var(--td-font-weight);
    inset: -1px;
    padding: 0 var(--cell-padding-horizontal);
    box-sizing: border-box;
    position: absolute;
    text-align: center;
    place-content: center;
    transition: background-color .5s linear;
    &:focus {
      outline: 1px solid var();
    }
    &.error {
      transition: background-color 0s linear;
      background-color: var(--error);
    }
  }
</style>
