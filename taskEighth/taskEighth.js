widthBlind = prompt('Введите ширину роллеты');
heightBlind = prompt('Введите высоту роллеты');
plasticBlinds = 200;
textileBlinds = 250;
aluminumBlinds = 350;
materialSelection = parseInt(
  prompt(
    'Ширина(см) -> ' +
      widthBlind +
      '\nВысота(см) -> ' +
      heightBlind +
      '\nМатериал : ' +
      ' \n1.Пластик ' +
      ' \n2.Текстиль ' +
      '\n3.Алюминий'
  )
);
squareBlinds = (widthBlind / 100) * (heightBlind / 100);
pricePlasticBlinds = parseFloat(plasticBlinds * squareBlinds);
priceTextileBlinds = parseFloat(textileBlinds * squareBlinds);
priceAluminumBlinds = parseFloat(aluminumBlinds * squareBlinds);
if (materialSelection == 1) {
  alert(
    'Цена за кв.м : 200.00 грн' +
      '\nПлощадь: ' +
      squareBlinds +
      ' кв.м ' +
      '\nК оплате : ' +
      pricePlasticBlinds +
      ' грн '
  );
} else if (materialSelection == 2) {
  alert(
    'Цена за кв.м : 250.00 грн' +
      '\nПлощадь: ' +
      squareBlinds +
      ' кв.м ' +
      '\nК оплате : ' +
      priceTextileBlinds +
      ' грн '
  );
} else if (materialSelection == 3) {
  alert(
    'Цена за кв.м : 350.00 грн' +
      '\nПлощадь: ' +
      squareBlinds +
      ' кв.м ' +
      '\nК оплате : ' +
      priceAluminumBlinds +
      ' грн '
  );
}
