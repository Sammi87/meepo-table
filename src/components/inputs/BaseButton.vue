<template>
  <button class="ez-base-btn">
    <slot />
  </button>
</template>

<style lang="scss">
:where(.ez-base-btn) {
  font-size: unset;
  font: unset;
  color: unset;
  width: unset;
  height: unset;
  background-color: transparent;
  border: unset;
  cursor: pointer;
}
</style>
