//from dd-mm-yy to yyyy-mm-dd

// Unfortunately birthday data in the data base might be in the future, so I convert it as past.
export function convertDateFormat(inputDate: string) {
  const [day, month, year] = inputDate.split("-");

  // current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // get last two digits of the year

  let fullYear = parseInt(year, 10);

  // comparing with current year
  if (fullYear > currentYear) {
    fullYear = 1900 + fullYear;
  } else {
    fullYear = 2000 + fullYear;
  }

  const date = new Date(`${fullYear}-${month}-${day}`);

  // Format the date as "yyyy-MM-dd"
  const formattedDate = date.toISOString().slice(0, 10);
  return formattedDate;
}

// export function convertDateFormat(inputDate: string) {
//   const [day, month, year] = inputDate.split("-");

//   const fullYear = `20${year}`;
//   const date = new Date(`${fullYear}-${month}-${day}`);

//   // Format the date as "yyyy-MM-dd"
//   const formattedDate = date.toISOString().slice(0, 10);

//   return formattedDate;
// }
