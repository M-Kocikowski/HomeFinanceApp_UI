<template>
  <div>
    <b-container fluid id="date-picker-container">
      <b-form @submit="onSubmit" inline>
        <b-col cols="5">
          <b-form-group id="form-group-1" label="Date From:" label-for="input-date-from">
            <b-form-input id="input-date-from" type="date" required v-model="form.fromDate"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="5">
          <b-form-group id="form-group-2" label="Date To:" label-for="input-date-to">
            <b-form-input id="input-date-to" type="date" required v-model="form.toDate"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-button :disabled="submitDisabled" type="submit" variant="">Show Data</b-button>
        </b-col>
      </b-form>
    </b-container>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    fromDate: '',
                    toDate: '',
                },
            }
        },
        methods: {
            getInitialDates() {
                this.form.fromDate = this.$moment().subtract(1, "months").format('YYYY-MM-DD');
                this.form.toDate = this.$moment().format('YYYY-MM-DD');
            },

            onSubmit(e) {
                e.preventDefault();

            },

        },

        computed: {
            submitDisabled: function () {
                return !(this.form.fromDate !== '' && this.form.toDate !== '' && this.form.fromDate <= this.form.toDate)
            }
        },

        beforeMount() {
            this.getInitialDates();
        },

    }
</script>

<style scoped>
  #date-picker-container {
    width: 60%;
    margin: 20px auto;
  }
</style>
