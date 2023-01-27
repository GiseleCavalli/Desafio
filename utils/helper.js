
import feriados from '../service/feriado';

export default filtrarDiaMes(value) {    
    feriados.listar().then(resposta => {
      const dayMonth = resposta.data.response.holidays;
      this.feriados = dayMonth.filter(dayMonth => dayMonth.date.datetime.value == value);
    });
};