export const formatDate = (date: Date): string => {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const formattedMonth: string = month < 10 ? `0${month}` : String(month);
  const day: number = date.getDate();
  const formattedDay: string = day < 10 ? `0${day}` : String(day);

  return `${year}.${formattedMonth}.${formattedDay}`;
};
