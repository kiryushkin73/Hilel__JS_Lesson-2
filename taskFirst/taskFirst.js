let secondsEnter = prompt('Enter the number of seconds', 0);
let hours = parseInt(secondsEnter / 3600);
let minutes = parseInt((secondsEnter - hours * 3600) / 60);
let result =
  secondsEnter + ' seconds it ' + hours + ' hours ' + minutes + ' minutes ';
alert(result);
