<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-1">Home Finance</b-navbar-brand>
      <b-navbar-nav align="center" small>
        <b-nav-item :active="link1" @click="clickFirstLink" to="/">Main</b-nav-item>
        <b-nav-item :active="link2" @click="clickSecondLink" to="/history">Add history</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>
  export default {
      data(){
          return{
              link1: true,
              link2: false
          }
      },
      methods:{
          clickFirstLink(){
              this.link1 = true;
              this.link2 = false;
          },
          clickSecondLink(){
              this.link1 = false;
              this.link2 = true;
          }
      }
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
