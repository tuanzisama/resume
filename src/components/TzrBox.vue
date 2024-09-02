<template>
  <div class="tzr-box">
    <div class="tzr-box__header text-typo" v-if="!props.hiddenHeader">
      <span class="icon material-symbols-outlined" v-if="props.icon">{{ props.icon }}</span>
      <span class="title">
        <slot name="title">{{ props.title }}</slot>
      </span>
    </div>
    <div class="tzr-box__body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<TzrBoxProps>(), {
  hiddenHeader: false,
});
</script>

<script lang="ts">
interface TzrBoxProps {
  title: string;
  icon?: string;
  hiddenHeader?: boolean;
}
</script>

<style lang="scss" scoped>
.tzr-box {
  width: 100%;
  border-radius: 10px;

  // @include common-box;
  &__header {
    --text-typo-offset: -2px;
    @include flex-center;
    @include text-typo;
    height: 35px;
    font-size: 22px;
    cursor: pointer;
    letter-spacing: 2px;
    user-select: none;
    break-after: avoid;
    .icon {
      margin-right: 6px;
    }
    .title {
    }
  }
  &__body {
    margin: 20px 0 10px 0;
    & > .scroll {
      max-height: 300px;
      overflow-y: auto;
      overscroll-behavior: contain;
      @include custom-scrollbar();
    }
  }
}
</style>
