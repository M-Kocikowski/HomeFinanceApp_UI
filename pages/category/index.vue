<template>
  <div>
    <b-form-group id="form-input-type" label="Choose action for category">
      <b-form-radio-group v-model="radioSelected">
        <b-form-radio value="N">New Category</b-form-radio>
        <b-form-radio value="E" :disabled="this.selectOptions.length === 0">Edit Category</b-form-radio>
        <b-form-radio value="C" :disabled="this.selectOptions.length === 0">Categorize Item</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <b-form @submit="onSubmit" style="margin: auto 10%" v-if="this.radioSelected">
      <b-form-group
        id="input-group-1"
        label="Choose category"
        label-for="input-1"
        v-if="this.radioSelected==='E' || this.radioSelected==='C'"
      >
        <b-form-select
          id="input-1"
          v-model="selectedItem"
          :options="selectOptions"
          value-field="id"
          text-field="name"
          @change="showItem"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-2" :label="labelText" label-for="input-2">
        <b-form-input id="input-2" v-model="textField" type="text" placeholder="Enter Text"></b-form-input>
      </b-form-group>
      <b-button
        type="submit"
        variant="success"
        :disabled="disabledButton"
      >{{this.radioSelected === 'N' ? 'Save new category' : this.radioSelected === 'E' ? 'Modify category' : 'Save categorized item'}}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "",
      textField: "",
      selectOptions: [
        {
          id: Number,
          name: String
        }
      ],
      radioSelected: ""
    };
  },

  computed: {
    labelText() {
      if (this.radioSelected === "N" || this.radioSelected === "E") {
        return "Category Name";
      } else {
        return "Categorization Text";
      }
    },

    disabledButton() {
      if (this.radioSelected === "N") {
        return this.textField === "";
      } else {
        return (this.textField === "" || this.selectedItem === "");
      }
    }
  },

  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      let category = {name: this.textField};
      await this.$axios.post(
        "http://localhost:8080/api/categories/post",
        JSON.stringify(category),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      this.$router.push("/");
    },

    showItem(){
      console.log(this.selectedItem);
    }

  },

  async asyncData(context) {
    const response = await context.$axios.get(
      "http://localhost:8080/api/categories"
    );
    return { selectOptions: response.data };
  }
};
</script>

<style scoped>
#form-input-type {
  margin: 30px auto;
  text-align: center;
  font-size: larger;
  font-weight: lighter;
  font-style: italic;
}
</style>
