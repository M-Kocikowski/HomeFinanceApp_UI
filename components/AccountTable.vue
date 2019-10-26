<template>
  <div>
    <b-table
      bordered
      small
      responsive
      hover
      :fields="fields"
      :items="items"
    >
      <template v-slot:cell(edit)="row">
        <b-button size="sm" @click.prevent="redirect(row)">Edit</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },

  data() {
    return {
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
    redirect(row) {
      this.$router.push(`/history/${row.item.id}`);
    },
  }
};
</script>

<style scoped>
</style>
