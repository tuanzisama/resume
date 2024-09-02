<template>
  <div class="tzr-renderer">
    <p v-if="props.contentType === 'html'" :class="{ 'default-stylesheet': props.defaultStyle }" v-html="xss(props.content as string)" />
    <p
      v-else-if="props.contentType === 'markdown'"
      :class="{ 'default-stylesheet': props.defaultStyle }"
      v-html="markdown.render(purgeSpace(props.content as string))"
    />
    <component v-else-if="props.contentType === 'vnode'" :class="{ 'default-stylesheet': props.defaultStyle }" :is="(props.content as Function)()" />
    <p v-else :class="{ 'default-stylesheet': props.defaultStyle }" v-text="props.content" />
  </div>
</template>

<script lang="ts" setup>
import xss from "xss";
import MarkdownIt from "markdown-it";

const props = withDefaults(defineProps<TzrTimelineItemProps>(), {
  defaultStyle: true,
});
const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const purgeSpace = (text: string): string => {
  return text.replace(/\n( *)/g, "\n");
};
</script>

<script lang="ts">
import { RichContentRender } from "../assets/profile/typings";

interface TzrTimelineItemProps {
  contentType: RichContentRender["contentType"];
  content: RichContentRender["content"];
  defaultStyle?: boolean;
}
</script>

<style lang="scss">
.tzr-renderer .default-stylesheet {
  font-size: 14px;
  line-height: 1.3em;
  p {
    margin-bottom: 4px;
    font-size: 15px;
  }
  li {
    padding-left: 16px;
    position: relative;
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      content: "";
      position: absolute;
      left: 5px;
      top: 7px;
      display: inline-block;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      background: #515a6e;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  a {
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
  code {
    background-color: var(--tzr-codebox-bgcolor);
    padding: 1px 4px;
    border-radius: 4px;
    word-break: keep-all;
    white-space: nowrap;
    line-height: 80%;
    font-size: 90%;
    margin: 0 3px;
  }
}
</style>
