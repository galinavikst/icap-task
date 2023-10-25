//from dd-mm-yy to yyyy-mm-dd
export function convertDateFormat(inputDate: string) {
  const [day, month, year] = inputDate.split("-");

  const fullYear = `20${year}`;
  const date = new Date(`${fullYear}-${month}-${day}`);

  // Format the date as "yyyy-MM-dd"
  const formattedDate = date.toISOString().slice(0, 10);

  return formattedDate;
}
