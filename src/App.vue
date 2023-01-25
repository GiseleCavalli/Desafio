
<template>
  <div>
    <div class="div">
      <div>
        <p class="p">Dia</p>
        <select v-model="selectedDay" :items="days" @change=filtrarDia(selectedDay) class="select">
          <option v-for="day, index in days" :key="index" :value="day.id">
            {{ day.text }}
          </option>
        </select>
      </div>
      
      <div>
        <p class="p">Mês</p>
        <select v-model="selectedMonth" :items="months" @change=filtrarMes(selectedMonth) class="select">
          <option v-for="month, index in months" :key="index" :value="month.id">
            {{ month.text }}
          </option>
        </select>
      </div>

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
      feriados.listar().then(resposta => {
        const mes = resposta.data.response.holidays

        this.feriados = mes.filter(mes => mes.date.datetime.month == month)
      });
    },

    limparFiltro(){
      this.selectedDay = '';
      this.selectedMonth = '';
    }
  }
}
</script>

<style>
body{
  background-color: #f5ebe5;
  color: #625240;
}

.p{
  font-size: 17.5px;
}

.div{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5%;
}

.button{
  height: 38px;
  margin-top: 65%;
  padding: 5px 15px 5px 15px;
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 6px;
  border: 1px solid #63513c;
  background-color: #9fccc3;
  color: #63513c;
  cursor: pointer;
}

.select{
  padding: 5px 15px 5px 15px;
  margin-right: 5%;
  font-size: 16px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 6px;
  border: 1px solid #63513c;
  background-color: #ebddd5;
  color: #63513c;
  cursor: pointer;
}

.holiday{
  font-size: 17px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: left;
}
</style>
