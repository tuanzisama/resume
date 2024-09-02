<template>
  <div class="tzr-side">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tzr-side {
  width: 45mm;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  border: 2px dashed #30e3ca;
  border-radius: 10px 0 0 10px;

  padding: var(--paper-padding) 0;
}
</style>
