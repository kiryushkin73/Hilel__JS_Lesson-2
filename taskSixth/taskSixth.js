let a = parseFloat(prompt('a:', ''));
let b = parseFloat(prompt('b:', ''));
if (a == 0)
  if (b == 0) alert('Уравнение идентичности');
  else alert('Противоположное уравнение');
else {
  var x = -b / a;
  alert('x = ' + x);
}
