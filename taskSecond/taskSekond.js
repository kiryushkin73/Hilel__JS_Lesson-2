let height = parseFloat(prompt('Enter the ceiling height (in meters)'));
let width = parseFloat(prompt('Enter the width of the room (in meters)'));
let length = parseFloat(prompt('Enter the length of the room (in meters)'));
let windowsWidth = parseFloat(prompt('Enter the width of the windows '));
let windowsHeight = parseFloat(prompt('Enter the height of the windows'));
let windowsSquare = parseFloat(windowsWidth * windowsHeight);
let windowsNamber = parseFloat(prompt(' Enter the number of windows'));
if (windowsNamber > 1) parseFloat(windowsSquare * windowsNamber);
else if (windowsNamber < 1) windowsSquare;
let doorHeight = parseFloat(prompt('Enter the height of the door'));
let doorWidth = parseFloat(prompt('Enter the width of the door'));
let doorSquare = parseFloat(doorHeight * doorWidth);
let wallpaperSquare = 5;
let roomSquare = parseFloat(
  (width + length) * 2 * height - (windowsNamber + doorSquare)
);
let areaNeeds = Math.ceil(roomSquare / wallpaperSquare);

alert(
  ' Total square of ​​the room : ' +
    roomSquare +
    ' m2 ' +
    '\n To paste over the room you need wallpaper : ' +
    areaNeeds +
    ' rolls '
);
