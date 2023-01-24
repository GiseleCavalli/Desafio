
<template>
  <ul>
    <li v-for="feriado in feriados"> {{ format(new Date(2014, 1, 11), 'MM/dd/yyyy') }} 
    </li>
  </ul>
</template>

<script>
import feriados from '../service/feriado';
import { format, compareAsc } from 'date-fns';

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


          // let nomeFeriado = '';
          // let diaFeriado = '';
          // let anoFeriado = '';
          // let mesFeriado = '';

          // resposta.data.response.holidays.forEach(ferias => {
          //   nomeFeriado += `${ferias.name}` 
          //   diaFeriado += `${ferias.date.datetime.day}`
          //   mesFeriado += `${ferias.date.datetime.month}` 
          //   anoFeriado += `${ferias.date.datetime.year}`
          // });
          
          // this.feriados = nomeFeriado + diaFeriado + anoFeriado + mesFeriado;

        }).catch(error => {
          console.log('Vixe')
          console.log(error)
        })
    }
}
</script>

<style>
</style>
