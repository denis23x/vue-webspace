<template>
  <div id="navbar" :class="[{ 'bordered': !toggle }]">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          :class="['navbar-burger', 'burger', { 'is-active': toggle }]"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navbar"
          @click="toggle = !toggle">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="main-navbar"
        :class="['navbar-menu', { 'is-active': toggle }]">
        <div class="navbar-end">
          <a class="navbar-item has-text-link" target="_blank" href="https://github.com/denis23x">GitHub</a>
          <a class="navbar-item has-text-link" target="_blank" href="https://hh.kz/resume/534566f0ff03dab2300039ed1f52526e50336e">HH</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data: () => {
    return {
      toggle: false
    }
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  padding: 0 1rem;
  &.bordered {
    border-bottom: 2px solid #f5f5f5;
  }
}
</style>
