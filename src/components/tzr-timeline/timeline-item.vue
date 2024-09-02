<template>
  <div class="tzr-timeline-item">
    <span class="tzr-timeline-item-icon">
      <span class="material-symbols-outlined"> {{ props.icon }} </span>
    </span>

    <div class="tzr-timeline-item-wrapper">
      <div class="tli-header">
        <slot name="header"> </slot>
      </div>
      <div class="tli-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<TzrTimelineItemProps>(), {
  hiddenHeader: false,
});
</script>

<script lang="ts">
interface TzrTimelineItemProps {
  icon?: string;
  hiddenHeader?: boolean;
}
</script>

<style lang="scss" scoped>
.tzr-timeline-item {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }

  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: -44px;
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: 0 0 0 6px #fff;

    background-color: #f4f6f8;
    color: #7b7b7b;
    span.material-symbols-outlined {
      font-size: 20px;
    }
  }
  &-wrapper {
    margin-top: -38px;
    .tli-header {
      height: 38px;
      font-weight: 700;
      line-height: 38px;
      font-size: 16px;
      font-weight: 700px;
    }
    .tli-body {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
