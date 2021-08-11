let checkDate;
let day = parseInt(prompt('Введите день  : '));
let month = parseInt(prompt('Введите месяц  : '));
let year = parseInt(prompt('Введите год : '));
checkDate = day + '.' + month + '.' + year + ' Такая дата существует   ';
// checkDate =
//   day + '.' + month + '.' + year + ' Дата Существует \n Это высокосный год';
// } else {
//   checkDate = day + '.' + month + '.' + year + ' Такой даты не существует';
if (year == 0 || year == null) {
  checkDate = day + '.' + month + '.' + year + ' Такой  даты не существует   ';
}
let yearExaminationFirst = year % 4 != 0;
let yearExaminationSecond = year % 100 == 0;
let yearExaminationThird = year % 400 != 0;
let leapYear =
  yearExaminationFirst || (yearExaminationSecond && yearExaminationThird);
if (day >= 29 && month == 2 && leapYear) {
  checkDate = day + '.' + month + '.' + year + ' Такой дата не существует   ';
} else if (day <= 29 && month == 2 && !leapYear) {
  checkDate = day + '.' + month + '.' + year + ' Такая  дата существует   ';
} else
  checkDate = day + '.' + month + '.' + year + ' Такой дата не существует   ';

if (day > 31 || day == 0 || day == ' ' || day === null) {
  //  (checkDate =
  //     day + ' ' + month + ' ' + year + ' Такая  дата не существует   ')

  // checkDate = day + ' ' + month + ' ' + year + ' Такая дата существует   ';

  //   checkDate = day + '.' + month + ' . ' + year + ' Такая дата  существует';
  // else {
  //   checkDate = day + '.' + month + ' . ' + year + ' Такой даты не существует';
  // }
  // else if (year % 400 == 0) {
  // } else if (year % 100 == 0) {
  // } else if (year % 4 == 0) {
  // }
  // if (month == 2 && !year) {
  // } else if (year % 400 == 0) {
  // } else if (year % 100 == 0) {
  // } else if (year % 4 == 0) {
  // }

  checkDate =
    day +
    '.' +
    month +
    '.' +
    year +
    ' Такой даты не существует  \nВведен неверно день';
}
// yearExaminationFirst = year % 4 != 0;
// yearExaminationSecond = year % 100 == 0;
// yearExaminationThird = year % 400 != 0;
// let leapYear =
//   yearExaminationFirst || (yearExaminationSecond && yearExaminationThird);
// if (month > 12 || month == 0) {
if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
  checkDate =
    day +
    '.' +
    month +
    '.' +
    year +
    ' Такой даты не существует  \nВ этом месяце 30 дней';
} else if (month > 12 || month == 0 || month == null) {
  checkDate =
    day +
    '.' +
    month +
    '.' +
    year +
    ' Такой даты не существует  \nВведен не верно месяц ';
}
// else if (month == 2 && Year) {
//   day = 29;
// } else if (month == 2 && !Year) {
//   day = 28;
// }
// if (year < 1 || month < 1 || month > 12 || day < 1) {
//   checkDate = day + ' ' + month + ' ' + year + 'такой даты не существует';
// } else checkDate = day + ' ' + month + ' ' + year + 'такая дата существует';

alert(checkDate);

// switch (day == 29 && month == 2) {
//   case leapYear:
//     year % 4 != 0 || (year % 100 == 0 && year % 400 != 0);
// }
