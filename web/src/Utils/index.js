export const currentDate = () => {
  const data = new Date();
  data.setDate(data.getDate());
  const dia_semana = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
  ][data.getDay()];
  const dia = data.getDate();
  const mes = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ][data.getMonth()];
  const ano = data.getFullYear();
  return `${dia_semana}, ${dia} de ${mes} de ${ano}`;
};
