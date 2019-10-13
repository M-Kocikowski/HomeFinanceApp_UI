<template>
  <div>
    <b-form-group label="Choose input type">
      <b-form-radio-group v-model="selected" :options="options">
      </b-form-radio-group>
    </b-form-group>
    <FileUpload v-if="selected==='F'"/>
  </div>
</template>

<script>

    import FileUpload from "@/components/FileUpload";

    export default {
        components: {
            FileUpload
        },

        data() {
            return {
                selected: '',
                options: [
                    {text: 'File Upload', value: 'F'},
                    {text: 'Manual Entry', value: 'M'}
                ]
            }
        },

    }
</script>

<style scoped>

</style>
