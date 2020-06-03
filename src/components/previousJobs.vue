<template>
  <div id="previousJobs">
    <article class="media box" v-for="(job, key) in previousJobs" :key="key">
      <figure class="media-left is-hidden-mobile">
        <p class="image is-64x64">
          <img :src="`assets/images/${job.image}`">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div>
            <strong class="mr-1">
              <a target="_blank" :href="job.href">{{job.title}}</a>
            </strong>
            <small>{{job.period}}</small>
            <p class="is-size-7" v-html="job.text"></p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'previousJobs',
  props: {
    previousJobs: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>
