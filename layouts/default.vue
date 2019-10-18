<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-1">Home Finance</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" :active="$route.name === 'index'">Main</b-nav-item>
        <b-nav-item to="/history" :active="$route.name === 'history' || $route.name === 'history-id'">Add history</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
