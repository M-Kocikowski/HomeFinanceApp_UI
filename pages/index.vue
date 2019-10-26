<template>
  <div>
    <DatePicker @submitDates="onSubmit($event)"/>
    <PieChart v-if="chartData.datasets[0].data.length !== 0" :width="300" :height="300" :chartData="chartData" />
    <AccountTable v-if="items.length !== 0" :items="items"/>
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker';
import PieChart from "@/components/PieChart";
import AccountTable from "@/components/AccountTable";

export default {
  components: {
    DatePicker,
    PieChart,
    AccountTable
  },

  data() {
    return {
      items: [],
    };
  },

  methods: {

    async onSubmit(event) {
      let response = await this.$axios.get(
        `http://localhost:8080/api/operations/${event.fromDate}/${event.toDate}`
      );
      this.items = response.data;
    }
  },

  computed: {

    chartData() {
      const labelArray = this.$store.getters["category/getCategoryNames"];
      let dataArray = [];
      this.items.forEach(item => {
        if (item.category !== null) {
          const categoryIndex = labelArray.findIndex(
            el => el === item.category.name
          );
          if (categoryIndex !== -1) {
            let sum = dataArray[categoryIndex];
            if (sum === undefined) {
              dataArray[categoryIndex] = Math.abs(item.amount);
            } else {
              sum += Math.abs(item.amount);
              dataArray[categoryIndex] = sum;
            }
          }
        }
      });
      let chartObject = {
        labels: labelArray,
        datasets: [
          {
            backgroundColor: [
              "blue",
              "orange",
              "green",
              "red",
              "purple",
              "yellow",
              "brown",
              "pink"
            ],
            data: dataArray
          }
        ]
      };
      return chartObject;
    }
  },

  async asyncData(context) {
    let fromDate = context
      .$moment()
      .subtract(2, "months")
      .format("YYYY-MM-DD");
    let toDate = context.$moment().format("YYYY-MM-DD");
    let resp = await context.$axios.get(
      `http://localhost:8080/api/operations/${fromDate}/${toDate}`
    );
    return {items: resp.data};
  }

};
</script>

<style scoped>

</style>
