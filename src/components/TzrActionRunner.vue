<template>
  <div class="tzr-action" :class="{ 'default-stylesheet': props.defaultStyle }">
    <a class="action-link" v-if="type === 'url'" :href="(props.data as string)" target="_blank" rel="noopener noreferrer">
      <slot>{{ props.label }}</slot>
    </a>
    <div class="action-imgprv" v-else-if="type === 'image-preview'">
      <!-- <div class="imgprv-wrapper" v-for="(item, index) in Array.isArray(props.data) ? props.data : [props.data]" :key="index">
        <img :src="item" :alt="`${props.label} - ${index + 1}/${props.data.length}`" />
      </div> -->
    </div>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<TzrTimelineItemProps>(), {
  defaultStyle: true,
});
</script>

<script lang="ts">
import { RichAction } from "../assets/profile/typings";

interface TzrTimelineItemProps {
  type?: RichAction["type"];
  label?: RichAction["label"];
  data?: RichAction["data"];
  defaultStyle?: boolean;
}
</script>

<style lang="scss">
.tzr-action {
  .action-link {
    display: inline-block;
    margin: 0px 3px;
    color: var(--tzr-hyperlink-color);
    @include text-typo;
    margin-bottom: 0 !important;
    &::before {
      content: normal;
    }
    &::after {
      bottom: 0px;
    }
  }
  .action-imgprv {
  }
}
</style>
