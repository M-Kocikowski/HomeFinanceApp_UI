<template>
  <div>
    <OperationForm
      :id="item.id"
      :type="item.type"
      :orderDate="item.orderDate"
      :description="item.description"
      :amount="item.amount"/>
  </div>
</template>

<script>

    import OperationForm from "@/components/OperationForm";

    export default {

        components: {
            OperationForm
        },

        data() {
            return {
                item: {
                    id: Number,
                    type: String,
                    orderDate: String,
                    description: String,
                    amount: Number
                }
            }
        },

        async asyncData(context){
            let id = context.route.params.id;
            let response = await context.$axios.get(`http://localhost:8080/api/operations/${id}`);
            return {item: response.data};
        },

    }
</script>

<style scoped>

</style>
