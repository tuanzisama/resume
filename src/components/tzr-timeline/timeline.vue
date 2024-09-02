<template>
  <div class="tzr-timeline">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.tzr-timeline {
  width: 94%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 26px;
  border-left: 2px solid #e3e3e3;
  font-size: 1.125rem;
}
</style>
