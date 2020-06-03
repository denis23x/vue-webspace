<template>
  <div id="projects">
    <masonry :cols="masonry.cols" :gutter="masonry.gutter">
      <article class="box mb-1" v-for="(project, key) in projects" :key="key">
        <a class="subtitle is-block has-text-link" target="_blank" :href="project.href">{{project.title}}</a>
        <p class="mb-1 is-size-7" v-for="(paragraph, key) in project.text" :key="key" v-html="paragraph"></p>
        <span :class="['tag', statuses[project.status]]">{{project.status}}</span>
      </article>
    </masonry>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data: () => {
    return {
      masonry: {
        cols: {
          default: 3,
          // 1920: 6,
          // 1440: 4,
          1024: 3,
          768: 2,
          540: 1
        },
        gutter: {
          default: '1rem'
        },
      },
      statuses: {
        wip: 'is-success',
        deprecated: 'is-danger',
        maintenance: 'is-link'
      }
    };
  },
  props: {
    projects: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>
