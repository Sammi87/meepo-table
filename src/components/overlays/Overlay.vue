<script setup lang="ts">
import winResize from "@/composables/windowResize";
import { TransitionType } from "@/types/enums";

const props = withDefaults(
  defineProps<{
    active: boolean;
    transition?: TransitionType;
    teleport?: string;
  }>(),
  {
    teleport: "body",
    transition: TransitionType.FADEUP,
  }
);

const emit = defineEmits<{
  (e: "close"): void;
}>();

winResize(() => emit("close"));
</script>

<template>
  <Teleport :to="props.teleport">
    <Transition :name="props.transition">
      <div
        v-if="props.active"
        class="overlay-container"
      >
        <div
          class="overlay-mask"
          @click="emit('close')"
        />
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
@import '@/assets/styles/transitions';
.fade-up-enter-active,
.fade-up-leave-active { transition: opacity 0.15s linear, transform 0.25s $easeoutquint; }
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

.opacity-enter-active,
.opacity-leave-active { transition:  opacity 0.25s linear }
.opacity-enter-from,
.opacity-leave-to { opacity: 0; }

.overlay-container {
  position: fixed;
  inset: 0;
}
.overlay-mask {
  position: fixed;
  inset: 0;
}
</style>
