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

  methods: {
    renderPieChart() {
      this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false});
    }
  },

  mounted() {
    this.renderPieChart();
  },

  watch: {
    chartData: function() {
      console.log(this._data._chart);
      this._data._chart.destroy();
      this.renderPieChart();
    }
  }
};

</script>

<style scoped>
</style>
