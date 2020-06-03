<template>
  <div id="app">
    <navbar></navbar>
    <div class="px-1 pt-1">
      <h1 class="title is-4">Greetings!</h1>
      <h2 class="subtitle is-6">You are on my site, here I have collected my work. I have been developing applications on <b>JS</b> for many years on modern frameworks. I am currently working for myself, developing on <b>Angular</b>, <b>Node</b>, <b>React Native</b></h2>
    </div>
    <hr>
    <div class="px-1">
      <h1 class="title is-4">Previous jobs</h1>
      <h2 class="subtitle is-6">A brief description of my previous jobs</h2>
      <previousJobs :previousJobs="previousJobs"></previousJobs>
    </div>
    <hr>
    <div class="px-1">
      <h1 class="title is-4">Skills</h1>
      <h2 class="subtitle is-6">Everything I had to work with, almost</h2>
      <skills :skills="skills"></skills>
    </div>
    <hr>
    <div class="px-1">
      <h1 class="title is-4">WIP</h1>
      <h2 class="subtitle is-6">Work in progress projects</h2>
      <projects :projects="wip"></projects>
    </div>
    <hr>
    <div class="px-1">
      <h1 class="title is-4">Published</h1>
      <h2 class="subtitle is-6">Projects you can take a look at</h2>
      <projects :projects="published"></projects>
    </div>
    <hr>
    <div class="px-1 pb-1">
      <h1 class="title is-4">Contact</h1>
      <h2 class="subtitle is-6">
        <a href="https://t.me/denis23x">t.me/denis23x</a>
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navbar from './components/navbar'
import previousJobs from './components/previousJobs'
import skills from './components/skills'
import projects from './components/projects'

export default {
  name: 'App',
  components: {
    navbar,
    previousJobs,
    skills,
    projects
  },
  data: () => {
    return {

    };
  },
  computed: {
    ...mapState({
      previousJobs: 'previousJobs',
      skills: 'skills',
      wip: 'wip',
      published: 'published',
    })
  }
}
</script>
