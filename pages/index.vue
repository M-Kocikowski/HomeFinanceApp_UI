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
          <b-button :disabled="submitDisabled" type="submit" variant="info">Show Data</b-button>
        </b-col>
      </b-form>
    </b-container>
    <b-table bordered small responsive hover :fields="fields" :items="items">
      <template v-slot:cell(edit)="row">
        <b-button size="sm" @click="redirect(row)">Edit</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fromDate: "",
        toDate: ""
      },
      items: [],
      fields: [
        { key: "orderDate", label: "Order Date" },
        { key: "type", label: "Type" },
        { key: "description", label: "Description" },
        { key: "category.name", label: "Category" },
        { key: "amount", label: "Amount" },
        { key: "edit", label: "Edit" }
      ]
    };
  },

  methods: {
    getInitialDates() {
      this.form.fromDate = this.$moment()
        .subtract(2, "months")
        .format("YYYY-MM-DD");
      this.form.toDate = this.$moment().format("YYYY-MM-DD");
    },

    redirect(row) {
      this.$router.push(`/history/${row.item.id}`);
    },

    async onSubmit(e) {
      if (e !== undefined) {
        e.preventDefault();
      }
      let response = await this.$axios.get(
        `http://localhost:8080/api/operations/${this.form.fromDate}/${this.form.toDate}`
      );
      this.items = response.data;
    },

    log(row) {
      console.log(row.item.id);
    }
  },

  computed: {
    submitDisabled: function() {
      return !(
        this.form.fromDate !== "" &&
        this.form.toDate !== "" &&
        this.form.fromDate <= this.form.toDate
      );
    }
  },

  async fetch(context){
    const response = await context.$axios.get('http://localhost:8080/api/categories');
    context.store.commit('category/categorize', response.data);
  },

  beforeMount() {
    this.getInitialDates();
    this.onSubmit();
  }
};
</script>

<style scoped>
#date-picker-container {
  width: 60%;
  margin: 30px auto;
  font-weight: lighter;
  font-size: larger;
}
</style>
