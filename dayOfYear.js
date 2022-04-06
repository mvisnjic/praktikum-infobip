/* const dayOfYear = (day, month, year) => {
  return 1;
}; */

const days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
const leap = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
function dayOfYear(day, month, year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return leap[month - 1] + day;
  }
  console.log(days[month - 1] + day);
  return days[month - 1] + day;
}

module.exports = dayOfYear;
