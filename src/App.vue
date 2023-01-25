
<template>
  <div>
    <select v-model="selectedDay" :items="days" @change=filtrarDia(selectedDay)>
      <option v-for="day, index in days" :key="index" :value="day.id">
        {{ day.text }}
      </option>
    </select>

    <select v-model="selectedMonth" :items="months" @change=filtrarMes(selectedMonth)>
      <option v-for="month, index in months" :key="index" :value="month.id">
        {{ month.text }}
      </option>
    </select>

    <div v-for="feriado in feriados">
      {{ feriado.name }} - {{ formatDate({ year: feriado.date.datetime.year, month: feriado.date.datetime.month, day:
          feriado.date.datetime.day}) }}
    </div>
  </div>
</template>

<script>
import feriados from '../service/feriado';
import { format } from 'date-fns';

export default {

  data() {
    return {
      feriados: [],
      days: [
        {text: '1', id: 1}, 
        {text: '2', id: 2}, 
        {text: '3', id: 3}, 
        {text: '4', id: 4}, 
        {text: '5', id: 5},
        {text: '6', id: 6},
        {text: '7', id: 7},
        {text: '8', id: 8},
        {text: '9', id: 9},
        {text: '10', id: 10},
        {text: '11', id: 11},
        {text: '12', id: 12},
        {text: '13', id: 13},
        {text: '14', id: 14},
        {text: '15', id: 15},
        {text: '16', id: 16},
        {text: '17', id: 17},
        {text: '18', id: 18},
        {text: '19', id: 19},
        {text: '20', id: 20},
        {text: '21', id: 21},
        {text: '22', id: 22},
        {text: '23', id: 23},
        {text: '24', id: 24},
        {text: '25', id: 25},
        {text: '26', id: 26},
        {text: '27', id: 27},
        {text: '28', id: 28},
        {text: '29', id: 29},
        {text: '30', id: 30},
        {text: '31', id: 31}
      ],
      months: [
        {text: 'Janeiro', id: 1}, 
        {text: 'Fevereiro', id: 2}, 
        {text: 'Março', id: 3}, 
        {text: 'Abril', id: 4}, 
        {text: 'Maio', id: 5},
        {text: 'Junho', id: 6},
        {text: 'Julho', id: 7},
        {text: 'Agosto', id: 8},
        {text: 'Setembro', id: 9},
        {text: 'Outubro', id: 10},
        {text: 'Novembro', id: 11},
        {text: 'Dezembro', id: 12}
      ],
      selectedMonth: '',
      selectedDay: '',
    }
  },

  mounted() {
    feriados.listar().then(resposta => {
      console.log(resposta.data.response.holidays)

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
      feriados.listar().then(resposta => {
        const dia = resposta.data.response.holidays

        this.feriados = dia.filter(dia => dia.date.datetime.day == day)
      });
    },

    filtrarMes(month) {
      console.log(month)
      feriados.listar().then(resposta => {
        const mes = resposta.data.response.holidays

        this.feriados = mes.filter(mes => mes.date.datetime.month == month)
      });
    },
    
    // filtrarTipo(type) {
    //   feriados.listar().then(resposta => {
    //     const tipo = resposta.type

    //     this.feriados = tipo.filter(tipo => tipo.type == type)
    //   });
    // }
  }
}
</script>

<style>

</style>
