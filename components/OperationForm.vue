<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" style="margin: auto 10%">
      <b-form-group id="input-group-1" label="Type:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.type"
          type="text"
          required
          placeholder="Enter type"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Date:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.orderDate" type="date" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Description:" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="form.description"
          placeholder="Enter description..."
          rows="2"
          max-rows="5"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-4" label="Amount:" label-for="input-4">
        <b-form-input v-model="form.amount" id="input-4" type="number" step="0.01"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Category" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.category.id"
          :options="selectOptions"
          value-field="id"
          text-field="name"
        ></b-form-select>
      </b-form-group>

      <b-button
        type="submit"
        variant="success"
      >{{this.editOperation ? 'Modify operation' : 'Save new operation'}}</b-button>
      <b-button type="reset" variant="danger">{{this.editOperation ? 'Delete Operation' : 'Reset'}}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    type: String,
    orderDate: String,
    description: String,
    amount: Number,
    category: {
      id: Number,
      name: String
    }
  },

  data() {
    return {
      form: {
        id: "",
        type: "",
        orderDate: "",
        description: "",
        amount: "",
        category: {
          id: "",
          name: ""
        }
      },
      editOperation: false
    };
  },

  computed: {
    selectOptions() {
      return this.$store.state.category.categories;
    }
  },

  methods: {
    async onSubmit(evt) {
      evt.preventDefault();

      if (this.form.id === "") {
        await this.$axios.post(
          "http://localhost:8080/api/operations/post",
          JSON.stringify(this.form),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      } else {
        await this.$axios.put(
          `http://localhost:8080/api/operations/put/${this.form.id}`,
          JSON.stringify(this.form),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
      this.$router.push("/");
    },

    async onReset(evt) {
      evt.preventDefault();
      if (this.editOperation) {
        if (confirm("Are you sure you want to delete the record?")) {
          await this.$axios.delete(
            `http://localhost:8080/api/operations/delete/${this.form.id}`
          );
          this.$router.push("/");
        }
      } else {
        this.form.type = "";
        this.form.orderDate = "";
        this.form.description = "";
        this.form.amount = "";
      }
    }
  },

  beforeMount() {
    if (this.id !== undefined) {
      this.form.id = this.id;
      this.form.type = this.type;
      this.form.orderDate = this.orderDate;
      this.form.description = this.description;
      this.form.amount = this.amount;
      if (this.category !== null) {
        this.form.category.id = this.category.id;
      }
      this.editOperation = true;
    }
  }
};
</script>

<style scoped>
</style>
