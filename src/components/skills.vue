<template>
  <div id="skills">
    <div class="tags">
      <span class="tag" v-for="(skill, key) in skills" :key="key">{{skill}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: {
    skills: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>
