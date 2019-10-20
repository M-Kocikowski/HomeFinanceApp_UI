<template>
  <div>
    <b-form-group id="form-input-type" label="Choose action for category">
      <b-form-radio-group v-model="radioSelected" :options="radioOptions"></b-form-radio-group>
    </b-form-group>
    <b-form @submit="onSubmit" style="margin: auto 10%" v-if="radioSelected">
      <b-form-group id="input-group-1" :label="labelText" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="radioOptions[0].text"
          type="text"
          required
          placeholder="Enter Text"
        ></b-form-input>
      </b-form-group>
      <b-button
        type="submit"
        variant="success"
      >{{this.radioSelected === 'N' ? 'Save new category' : this.radioSelected === 'E' ? 'Modify category' : 'Save cateogrized item'}}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioSelected: "",
      radioOptions: [
        { text: "New Category", value: "N" },
        { text: "Edit Category", value: "E" },
        { text: "Categorize Item", value: "C" }
      ]
    };
  },

  computed: {
    labelText() {
      if (this.radioSelected === "N" || this.radioSelected === "E") {
        return "Category Name";
      } else {
        return "Categorization Text";
      }
    }
  },

  methods: {
    onSubmit(evt) {}
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
