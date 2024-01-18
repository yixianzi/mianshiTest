const dateFormToMonth = (date1) => {
  let date = new Date(date1);
  let Y = date.getFullYear();
  let M =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  return `${Y}${M}`;
  return Y + M;
};
console.log(dateFormToMonth("2023-01-01"));
console.log(dateFormToMonth("2023-09-01"));
console.log(dateFormToMonth("2023-10-01"));
console.log(dateFormToMonth("2023-11-01"));
console.log(dateFormToMonth("2023-12-01"));
