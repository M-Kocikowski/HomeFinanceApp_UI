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

// import { Pie } from 'vue-chartjs'

// export default {
//   extends: Pie,
//   mounted () {
//     this.renderChart({
//       labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
//       datasets: [
//         {
//           backgroundColor: [
//             '#41B883',
//             '#E46651',
//             '#00D8FF',
//             '#DD1B16'
//           ],
//           data: [40, 20, 80, 10]
//         }
//       ]
//     }, {responsive: true, maintainAspectRatio: false})
//   }
// }

</script>

<style scoped>
</style>

// import { Pie } from 'vue-chartjs'

// export default {
//   extends: Pie,
//   mounted () {
//     this.renderChart({
//       labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
//       datasets: [
//         {
//           backgroundColor: [
//             '#41B883',
//             '#E46651',
//             '#00D8FF',
//             '#DD1B16'
//           ],
//           data: [40, 20, 80, 10]
//         }
//       ]
//     }, {responsive: true, maintainAspectRatio: false})
//   }
}
