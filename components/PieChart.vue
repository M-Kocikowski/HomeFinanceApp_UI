<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,

  props: {
    chartData: {
      type: Object,
      default: null
    },
  },

  mounted() {
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false});
  }
};

</script>

<style scoped>
</style>
