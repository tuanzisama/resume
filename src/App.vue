<template>
  <paper-page-box>
    <div class="resume-info" :class="{ 'with-avatar': profile.avatar }">
      <div class="resume-info__title">
        <p class="name">{{ profile.name }}</p>
        <p class="offer-items">
          {{ profile.offers.join(", ") }}
        </p>
      </div>
      <tzr-avatar v-if="profile.avatar" :src="profile.avatar" />
    </div>
    <ul class="resume-basic">
      <li class="resume-basic-item" v-for="(item, index) in profile.overview" :key="index">
        <span class="label">{{ item.label }}</span>
        <tzr-action-runner :type="item.action?.type" :data="item.action?.data" :default-style="false">
          <span class="value">{{ item.value }}</span>
        </tzr-action-runner>
      </li>
    </ul>
    <tzr-box title="工作经历" icon="work">
      <ul class="work-exp">
        <li class="work-exp-item" v-for="(exp, index) in profile.workExperience" :key="index">
          <p class="work-status">
            <span class="company-name">{{ exp.company }}</span>
            <span class="working-time">{{ exp.startTime }}-{{ exp.endTime }}</span>
          </p>
          <article class="work-desc" v-if="exp.description">{{ exp.description }}</article>
          <tzr-timeline class="work-projects">
            <tzr-timeline-item v-for="(tl, tlIndex) in exp.projects" :key="tlIndex" :icon="tl.icon">
              <template #header>
                <div class="project-info">
                  <p class="project-info__name">{{ tl.name }}</p>
                  <p class="project-info__duration" v-if="tl.duration">⏱️{{ tl.duration }}</p>
                  <p class="project-info__role" v-if="tl.role">🛠️{{ tl.role }}</p>
                </div>
              </template>
              <tzr-content-renderer :content-type="tl.contentType" :content="tl.content" />
            </tzr-timeline-item>
          </tzr-timeline>
        </li>
      </ul>
    </tzr-box>
    <tzr-box title="个人项目" icon="text_snippet">
      <ul class="personal-pjkt">
        <li class="pjkt-item" v-for="(project, index) in profile.personalProjects" :key="index">
          <span class="pjkt-name">{{ project.name }}</span>
          <tzr-content-renderer :content-type="project.contentType" :content="project.content" />
        </li>
      </ul>
    </tzr-box>
    <tzr-box title="技能卡片" icon="box">
      <div class="skills-card-wrapper">
        <div class="skill-card" v-for="(skill, index) in profile.skills" :key="index">
          <p class="skill-info">
            <span class="skill-info__name">{{ skill.name }}</span>
            <span class="skill-info__comment">{{ skill.comment }}</span>
          </p>
          <tzr-content-renderer :content-type="skill.contentType" :content="skill.content" />
        </div>
      </div>
    </tzr-box>
  </paper-page-box>
</template>

<script lang="ts" setup>
import PaperPageBox from "./components/PaperPageBox.vue";
import { profile } from "./assets/profile/index";
import TzrBox from "./components/TzrBox.vue";
import TzrAvatar from "./components/TzrAvatar.vue";
import { TzrTimeline, TzrTimelineItem } from "./components/tzr-timeline";
import TzrContentRenderer from "./components/TzrContentRenderer.vue";
import TzrActionRunner from "./components/TzrActionRunner.vue";
</script>

<style lang="scss" scoped></style>
