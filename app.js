let boxColor = "wheat";
const myStyle = new Style(40, boxColor, 1, true); //create style
myStyle.createStyle();
const shape1 = new Shape(undefined, undefined, "white");
let array1 = [
  [1, 6],
  [2, 6],
  [2, 7],
];
let arrayTurns1 = [
  [
    [1, 0],
    [0, 1],
    [-1, 0],
  ],
  [
    [0, 1],
    [1, 0],
    [0, -1],
  ],
  [
    [1, 0],
    [0, -1],
    [1, 0],
  ],
];
let array2 = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];
let arrayTurns2 = [
  [0, -1],
  [1, 0],
  [2, 1],
  [3, 2],
];

let array3 = [
  [1, 4],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
];
shape1.draw(array3);
// let interval = setInterval(() => {
//   !shape1.down() && clearInterval(interval);//first down every time, second check if reach to down stop interval
// }, 1000);
document.getElementById("body").addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.code) {
    case "ArrowLeft":
      break;
    case "ArrowRight":
      break;
    case "ArrowDown":
      break;
    case "Space":
      break;
  }
});
