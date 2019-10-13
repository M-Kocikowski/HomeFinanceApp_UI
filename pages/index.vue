<template>
  <div>
    <DatePicker/>
    <AccountTable/>
  </div>
</template>

<script>
  import DatePicker from "@/components/DatePicker";
  import AccountTable from "@/components/AccountTable";

  export default {
      components:{
          DatePicker,
          AccountTable
      }
  }

</script>
