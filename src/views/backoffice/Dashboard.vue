<template>
    <div class="ola">
      <TheNavBar />
      <div class="fle">
        <DashboardBoxInfo class="box" :number="number1" content="PEDIDOS DE INICIATIVAS" />
        <DashboardBoxInfo class="box" :number="number2" content="INICIATIVAS FUTURAS" />
        <DashboardBoxInfo class="box" :number="number6" content="RISCOS DETETADOS" />
      </div>
      <div class="fle2">
        <DashboardBoxInfo class="box" :number="number4" content="FUNCIONÁRIOS DISPONÍVEIS" />
        <DashboardBoxInfo class="box" :number="number5" content="DONATIVOS" />
        <DashboardBoxInfo class="box" :number="number3" content="DESPESAS" />
      </div>
  
      <!-- Gráficos -->
      <div class="chart-container">
        <canvas id="bar-chart1" class="chart"></canvas>
        <canvas id="bar-chart2" class="chart"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import TheNavBar from '@/components/backoffice/TheNavBar.vue'
  import DashboardBoxInfo from '@/components/backoffice/DashboardBoxInfo.vue'
  import Chart from 'chart.js/auto';
  
  export default {
    components: { TheNavBar, DashboardBoxInfo },
    data() {
      return {
        number1: 0,
        number2: 0,
        number3: 0,
        number4: 0,
        number5: 0,
        number6: 0,
        proposedIniciatives: [],
        iniciatives: [],
        collaborators: []
      }
    },
    mounted() {
      this.proposedIniciatives = JSON.parse(localStorage.getItem('proposedIniciatives'))
      this.iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
      this.collaborators = JSON.parse(localStorage.getItem('collaborators'))
      var pastIniciatives = this.iniciatives.filter(iniciative => iniciative.status === 'passada')
      this.number1 = this.proposedIniciatives.length
      this.number2 = this.iniciatives.filter(iniciative => iniciative.status === 'aceite').length
      var sum1 = 0
      var sum2 = 0
      for (let i = 0; i < pastIniciatives.length; i++) {
        sum1 = sum1 + pastIniciatives[i].costs
        sum2 = sum2 + pastIniciatives[i].donatives
      }
      this.number3 = sum1
      this.number4 = this.collaborators.length
      this.number5 = sum2
      for (let i = 0; i < this.iniciatives.length; i++) {
        if (this.iniciatives[i].reportProblem === true) {
          this.number6 = 1
        }
      }
  
      // fazer par todos os meses
      this.createBarChart('bar-chart1', ['A', 'B', 'C', 'D', 'E'], [12, 19, 3, 5, 2], 'Custos', 
                            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)');
      this.createBarChart('bar-chart2', ['F', 'G', 'H', 'I', 'J'], [5, 10, 15, 20, 25], 'Donativos', 
                            'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)');
    },
    methods: {
      createBarChart(id, labels, data, label, backgroundColor, borderColor) {
        const ctx = document.getElementById(id);
        if (!ctx) return; // Verifica se o elemento existe antes de acessá-lo
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: label,
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .ola {
    margin-top: 120px;
    border: 2px solid rgb(0, 0, 0);
    width: 90%;
    margin-left: 5%;
    background-color: rgba(149, 160, 156, 0.179);
  }

  .box {
    margin-left: 40px;
  }
  
  .fle {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  
  .fle2 {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  
  .chart-container {
    margin-top: 100px;
    display: flex;
    margin-left: 14.5%;
    max-width: 552px;
  }
  
  .chart {
    width: 150px; /* Tamanho desejado para os gráficos */
    height: 150px; /* Tamanho desejado para os gráficos */
    margin-right: 20%;
  }
  </style>
  