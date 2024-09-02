<template>
  <transition name="custom-classes-transition">
    <div class="tzr-avatar animate__animated" ref="tzrAvatarRef" @mouseenter="flashAvatar(1)" @mouseleave="flashAvatar(0)" @click="flashAvatar(-1)">
      <img :src="props.src" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = withDefaults(defineProps<TzrAvatarProps>(), {});

const tzrAvatarRef = ref<HTMLDivElement>();

const flashAvatar = (status: -1 | 0 | 1) => {
  if (status === -1) {
    tzrAvatarRef.value?.classList.add("animate__tada");
    setTimeout(() => {
      tzrAvatarRef.value?.classList.remove("animate__tada");
    }, 1200);
  } else {
    tzrAvatarRef.value?.classList[status === 1 ? "add" : "remove"]("animate__tada");
  }
};
</script>

<script lang="ts">
interface TzrAvatarProps {
  src: string;
}
</script>

<style lang="scss" scoped>
.tzr-avatar {
  width: 120px;
  height: 120px;
  overflow: hidden;
  transition: all 0.3s;
  border: 4px solid transparent;
  border-radius: 10%;
  border-radius: 50%;
  border-color: #dcdee2;
  user-select: none;

  img {
    @include img-cover;
  }
}
</style>
