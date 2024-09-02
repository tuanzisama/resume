<template>
  <div class="page" ref="pageRef" :data-page-num="pageNum" :data-page-total="pageTotal">
    <div
      class="sub-page"
      :class="{
        flexable: props.flexable,
        'flex-column': props.flexable && props.direction === 'column',
        'flex-row': props.flexable && props.direction === 'row',
      }"
      :style="`--gap-size: ${gapSize}px`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";

const props = withDefaults(defineProps<PaperPageBoxProp>(), {
  flexable: true,
  direction: "column",
  gap: true,
});

const gapSize = computed<number>(() => {
  if (props.gap === true) return 20;
  else if (typeof props.gap === "number") return props.gap as number;
  else return 0;
});

const pageRef = ref<HTMLDivElement>();
const pageNum = ref(0);
const pageTotal = ref(0);

onMounted(() => {
  const parentChildrenNodes = pageRef.value?.parentElement?.children ?? [];
  pageNum.value = [...parentChildrenNodes].findIndex((child) => child === pageRef.value) + 1;
  pageTotal.value = parentChildrenNodes.length;
});
</script>

<script lang="ts">
interface PaperPageBoxProp {
  flexable: boolean;
  direction: "row" | "column";
  gap: boolean | number;
}
</script>

<style lang="scss" scoped>
.page {
  width: 210mm;
  min-height: 297mm;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;

  margin: 10px auto;
  padding: var(--paper-padding);

  &::after {
    content: attr(data-page-num) " / " attr(data-page-total);
    display: inline-block;
    position: absolute;
    top: 0px;
    right: -55px;
    background: #1d2535;
    padding: 4px 6px;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    user-select: none;
  }

  &:hover {
    .sub-page {
      outline-color: var(--tzr-primary-color);
    }
  }
}
.sub-page {
  height: 100%;
  // outline: 4px solid #dcdfe6;
  transition: outline-color 0.3s;
  &.flexable {
    width: 100%;
    display: flex;
    &.flex-column {
      flex-direction: column;
    }
    &.flex-row {
      flex-direction: row;
    }
  }
  & > :deep(*) {
    margin-bottom: var(--gap-size);
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
