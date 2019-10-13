<template>
  <div>
    <b-table bordered small responsive hover :items="items"></b-table>
  </div>
</template>

<script>
    export default {
        props: {
          items: []
        }

    }
</script>

<style scoped>

</style>
