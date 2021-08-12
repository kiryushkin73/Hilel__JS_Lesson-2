let enteredCargoWeight = parseFloat(
  prompt(
    'Введите вес груза в тоннах' +
      '\nдо 1т - 25л/100км' +
      '\nдо 2т - 30л/100км' +
      '\nдо 3т - 35л/100км' +
      '\nдо 4т - 42л/100км' +
      '\nдо 5т - 50л/100км' +
      '\nболее 5т - не взлетит',
    0.1
  )
);
// Вес груза
let enteredFuelInitially = parseInt(
  prompt('Введите начальное количество топлива в баке в литрах')
);
// Топливо в баке
let enteredVolumeTank = parseInt(
  prompt('Введите обьем бака самолета в литрах')
);
// Обьем бака самолета
let fuelConsumption = 0;
// расход топлива
let maxFlight = 0;
// максимальное расстояние полета
let distanseAC = parseInt(
  prompt('Введите расстояние от точки (А) к точке (Б) в километрах')
);
let distanseCB = parseInt(
  prompt('Введите расстояние от точки (Б) к точке (С) в километрах')
);

if (enteredCargoWeight > 5) {
  alert('Превышен максимальный порог веса \n Самолет не взлетит');
} else if (enteredCargoWeight >= 0 && enteredCargoWeight <= 1) {
  fuelConsumption = 25;
  maxFlight = (enteredFuelInitially / fuelConsumption) * 100;
} else if (enteredCargoWeight >= 1 && enteredCargoWeight <= 2) {
  fuelConsumption = 30;
  maxFlight = (enteredFuelInitially / fuelConsumption) * 100;
} else if (enteredCargoWeight >= 2 && enteredCargoWeight <= 3) {
  fuelConsumption = 35;
  maxFlight = (enteredFuelInitially / fuelConsumption) * 100;
} else if (enteredCargoWeight >= 3 && enteredCargoWeight <= 4) {
  fuelConsumption = 42;
  maxFlight = (enteredFuelInitially / fuelConsumption) * 100;
} else if (enteredCargoWeight >= 4 && enteredCargoWeight <= 5) {
  fuelConsumption = 50;
  maxFlight = (enteredFuelInitially / fuelConsumption) * 100;
}
if (maxFlight < distanseAC) {
  alert(' Полет не возможен!  Топлива не хватит до точки (B) ! ');
} else if (maxFlight >= distanseAC) {
  distanseAC = maxFlight - distanseAC;
}
if (distanseAC < distanseCB && maxFlight >= distanseAC) {
  alert(' Полет не возможен!Топлива не хватит до точки (С) ! ');
}
if (distanseCB >= 0 && distanseAC >= distanseCB && maxFlight >= distanseAC) {
  alert(' Нет необходимости доливать топливо, в баке достаточно топлива. ');
} else if (distanseCB > 0 && distanseAC <= distanseCB) {
  parseFloat(
    (distanseCB = ((distanseCB - distanseAC) * fuelConsumption) / 100)
  );
  alert(
    'В точке (B) необходимо долить ' +
      distanseCB +
      ' литров топлива для полёта до точки (C).'
  );
}
if (distanseCB > enteredVolumeTank && distanseAC < distanseCB) {
  alert('Дозаправка не помещаеться в бак');
}
