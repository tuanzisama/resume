<template>
  <div class="tzr-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.tzr-container {
  position: relative;
  flex: 1;
  width: 0;
  display: flex;
  border: 2px dashed #30e3ca;
  border-left-width: 0;
  border-radius: 0 10px 10px 0;
  padding: var(--paper-padding);
}
</style>
