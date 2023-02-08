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
    [-1, 0],
    [-1, 0],
    [1, 0],
  ],
  [
    [0, 0],
    [1, -1],
    [0, 0],
  ],
];
let array2 = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];
let arrayTurns2 = [
  [
    [-1, 1],
    [0, 0],
    [1, -1],
    [2, -2],
  ],
  [
    [1, -1],
    [0, 0],
    [-1, 1],
    [-2, 2],
  ],
];
let array3 = [
  [1, 6],
  [1, 7],
  [2, 6],
  [2, 7],
];
let arrayTurns3 = [
  [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
];
let array4 = [
  [1, 4], //2,4
  [2, 4], //1,4
  [2, 5], //1,5
  [2, 6], //1,6
  [2, 7], //1,7
  [1, 7], //2,7
];
let arrayTurns4 = [
  [
    [1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [1, 0],
  ],
  [
    [-1, 0],
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 0],
    [-1, 0],
  ],
];
let array5 = [
  [1, 4], //3,5
  [1, 5], //4,5
  [2, 5], //4,4
  [3, 5], //4,3
  [4, 5], //4,2
];
let arrayTurns5 = [
  [
    [1, 0],
    [0, -1],
    [-1, 0],
    [-2, 1],
    [-3, 2],
  ],
  [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, -2],
    [-2, -3],
  ],
  [
    [-1, 0],
    [0, 1],
    [1, 0],
    [2, -1],
    [3, -2],
  ],
  [
    [-2, -1],
    [-3, 0],
    [-2, 1],
    [-1, 2],
    [0, 3],
  ],
];
let boxColor = 'wheat';
createNewStyle();
createShape(array5, arrayTurns5, 'green');
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

function createNewStyle() {
  const myStyle = new Style(40, boxColor, 1, false); //create style
  myStyle.createStyle();
}

function createShape(array, arrayTurns, shapeColor) {
  const shape = new Shape(array, arrayTurns, shapeColor);
  shape.draw();
  document.getElementById("rotate").addEventListener("click", () => {
    shape.turnShape();
  });
}
