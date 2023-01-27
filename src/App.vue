
<template>
  <div>
    <div class="div">

      <FiltroData v-model="selectedDay" :items="days" title="Dia" @filtrarData="filtrarDia"/>

      <FiltroData v-model="selectedMonth" :items="months" :title="'Mês'" @filtrarData="filtrarMes(selectedMonth)"/>

      <!-- <div>
        <p class="p">Dia</p>
        <select v-model="selectedDay" :items="days" @change=filtrarDia(selectedDay) class="select">
          <option v-for="day, index in days" :key="index" :value="day.id">
            {{ day.text }}
          </option>
        </select>
      </div> -->

      <div class="div">
        <button @click="limparFiltro" class="button">Limpar</button>        
      </div>
    </div>
    
    <div v-for="feriado in feriados" class="holiday">
      {{ feriado.name }} - {{ formatDate({ year: feriado.date.datetime.year, month: feriado.date.datetime.month, day:
          feriado.date.datetime.day}) }}
    </div>
  </div>
</template>

<script>
import feriados from '../service/feriado';
import { format } from 'date-fns';
import { days, months } from '../utils/variables';
import './assets/app.css';
import FiltroData from './components/FiltroData.vue';

export default {

  data() {
    return {
      feriados: [],
      days: days,
      months: months,
      selectedMonth: '',
      selectedDay: '',
    }
  },
  components: {
    FiltroData 
  },
  mounted() {
    feriados.listar().then(resposta => {
      this.feriados = resposta.data.response.holidays;
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    formatDate({ year, month, day }) {
      return format(new Date(`${year}/${month}/${day}`), 'dd/MM/yyyy')
    },

    filtrarDia(day) {
      console.log('alo', this.selectedDay);
      
      feriados.listar().then(resposta => {
        const dia = resposta.data.response.holidays;
        this.feriados = dia.filter(dia => dia.date.datetime.day == day)
      });
    },

    filtrarMes(month) {
      console.log('Mês', month)

      feriados.listar().then(resposta => {
        const mes = resposta.data.response.holidays;
        this.feriados = mes.filter(mes => mes.date.datetime.month == month)
      });
    },

    limparFiltro(){
      this.selectedDay = '';
      this.selectedMonth = '';
      feriados.listar().then(resposta => {
        this.feriados = resposta.data.response.holidays
      });
    }
  }
}
</script>