
<template>
  <div>
    <div v-for="feriado in feriados"> 
      {{  feriado.name }} - {{ formatDate({year: feriado.date.datetime.year, month: feriado.date.datetime.month, day: feriado.date.datetime.day}) }}
    </div>
  </div>
</template>

<script>
import feriados from '../service/feriado';
import { format } from 'date-fns';

export default{

    data(){
        return{
            feriados: []
        }
    },

    mounted(){
        feriados.listar().then(resposta => {
          console.log(resposta.data.response.holidays)

          this.feriados = resposta.data.response.holidays;

        }).catch(error => {
          console.log('Vixe')
          console.log(error)
        })
    },

    methods:{
      formatDate({year, month, day}){
        return format(new Date(`${year}-${month}-${day}`), 'dd/MM/yyyy')
      }

    }

}
</script>

<style>
</style>
