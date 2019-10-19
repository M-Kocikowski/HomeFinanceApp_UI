<template>
  <div>
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    <b-button :disabled="buttonDisabled" type="button" variant="secondary" @click="post">Send File</b-button>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                file: null,
                items: []
            }
        },

        computed: {
            buttonDisabled: function () {
                return !this.file;
            }
        },

        methods: {
            async post()
            {
                if (this.file.type !== 'text/xml') {
                    alert("Not a valid file type");
                    return;
                }

                let formData = new FormData();
                formData.append('file', this.file);
                await this.$axios.post('http://localhost:8080/api/operations/post/file', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }

        },

    }
</script>

<style scoped>

</style>
