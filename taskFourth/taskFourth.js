let correctAnswer = 0;
let questionFirst = 0;
questionFirst +=
  prompt('Сколько будет 1+1 \n 1 - 5\n2 - 2\n3 - 7') == 2
    ? correctAnswer++
    : correctAnswer;
let questionSecond = 0;
questionSecond +=
  prompt('Сколько будет 4*(3+5) \n 1-28 \n2-30\n3-32') == 3
    ? correctAnswer++
    : correctAnswer;
let questionThird = 0;
questionThird =
  prompt('Правильно ли выражение 23*0=0 \n 1-Да\n2-Нет\n3-Незнаю') == 1
    ? correctAnswer++
    : correctAnswer;
let questionFourth = 0;
questionFourth =
  prompt('Сколько будет 21-(10-5)+2 \n 1 - 28\n2 - 25\n3 - 26') == 1
    ? correctAnswer++
    : correctAnswer;
let questionFifth;
questionFifth =
  prompt(
    'В 7 одинаковых стопках 84 тетради.Сколько тетрадей в таких стопках ? \n 1-24\n2-36\n3-42'
  ) == 2
    ? correctAnswer++
    : correctAnswer;
let questionSixth = 0;
questionSixth +=
  prompt(
    'На столе лежит 18 журналов.Из них половина детских.Сколько детских журналов лежит на столе? \n 1-18\n2-9\n3-15'
  ) == 2
    ? correctAnswer++
    : correctAnswer;
let questionSeventh = 0;
questionSeventh =
  prompt(
    'Длина прямоуголника 14 см,ширина-на 5 см меньше.Чему равна площадь прямоугольника? \n 1-126 m2\n2-100 m2\n3-122 m2'
  ) == 1
    ? correctAnswer++
    : correctAnswer;
let questionEighth = 0;
questionEighth =
  prompt(
    'В букете 7 белых цветов.Это 1/7 всех цветов в комнате.Сколько всего цветов в комнате? \n 1-49\n2-7\n3-14'
  ) == 1
    ? correctAnswer++
    : correctAnswer;
let questionNine = 0;
questionNine =
  prompt(
    'На 8 одинаковых кофтах 56 пугович.Сколько пуговиц на 5 таких кофтах? \n 1-45 \n2-40\n3-35'
  ) == 3
    ? correctAnswer++
    : correctAnswer;
let questionTens = 0;
questionTens =
  prompt(
    'Антон 16 тетрадей в клетку и 4 тетради в линейку.Во сколько раз больше тетрадей в клетку чем в линейку, купил Антон? \n 1-2\n2-4\n3-6'
  ) == 2
    ? correctAnswer++
    : correctAnswer;
alert(
  'Вы набрали правильных ответов : ' +
    correctAnswer +
    ' Ответов ' +
    '\nВаша оценка : ' +
    Math.ceil(12 / 10) * correctAnswer +
    ' Балла '
);
