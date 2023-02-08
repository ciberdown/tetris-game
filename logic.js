class Logics {
  constructor(shapes, shapeTurns, colors, createNewShapes) {
    this.shapes = shapes;
    this.shapeTurns = shapeTurns;
    this.colors = colors;
    this.createNewShapes = createNewShapes;
    this.filledPlaces = [];
    this.score = 0;
  }
  createShape() {
    const rnd = Math.floor(Math.random() * this.shapes.length);
    const rndColor = Math.floor(Math.random() * this.colors.length);
    const shape = new Shape(
      this.shapes[rnd],
      shapeTurns[rnd],
      this.colors[rndColor],
      this.filledPlaces
    );
    shape.draw();
    this.start(shape);
  }
  createNewStyle() {
    const myStyle = new Style(40, boxColor, 1, true); //create style
    myStyle.createStyle();
    this.createShape();
  }
  start(shape) {
    let interval = setInterval(() => {
      if (!shape.down()[0]) {
        this.stop(shape.down()[1], interval);
      }
    }, 1000);
    this.arrows(shape);
  }
  stop(myShape, interval) {
    clearInterval(interval);
    //if hasent like that add element
    this.addListFilledPlaces(myShape);
    this.createNewShapes && this.createShape();
  }
  arrows(shape) {
    document.getElementById("body").addEventListener("keydown", (e) => {
      e.preventDefault();
      switch (e.code) {
        case "ArrowLeft":
          shape.left();
          break;
        case "ArrowRight":
          shape.right();
          break;
        case "ArrowDown":
          shape.down();
          break;
        case "Space":
          shape.turnShape();
          break;
      }
    });
  }

  addListFilledPlaces(list) {
    let a = this.filledPlaces;
    let b = list;
    a = a.map((item) => {
      return item.toString();
    });
    b = b.map((item) => {
      return item.toString();
    });
    b.forEach((item) => {
      if (!(a.indexOf(item) != -1)) {
        //if has not this new item add it
        this.filledPlaces.push([
          parseInt(item.split(",")[0] - 1),
          parseInt(item.split(",")[1]),
        ]);
      }
    });
    this.checkBottomFill();
  }
  checkBottomFill() {
    let bottomFilled = true;
    let newArray = this.filledPlaces.filter((item) => {
      if (item[0] === 14) return item[1];
    });
    newArray = newArray.map((item) => {
      return item[1];
    });
    for (let i = 1; i <= 10; i++) {
      if (newArray.indexOf(i) === -1) {
        ///there is here=> so no problem
        bottomFilled = false;
        break;
      }
    }
    bottomFilled && this.removeBottom();
  }
  removeBottom() {
    let remain = this.filledPlaces.filter((item) => {
      if (item[0] !== 14) {
        return [item[0] + 1, item[1]];
      } else {
        document.getElementById([item[0] + 1, item[1]]).style.backgroundColor =
          boxColor;
      }
    });
    remain.forEach((item) => {//after fill, go a line down
      console.log(item);
      document.getElementById([item[0] + 2, item[1]]).style.backgroundColor =
        document.getElementById([item[0] + 1, item[1]]).style.backgroundColor;
      document.getElementById([item[0] + 1, item[1]]).style.backgroundColor =
        boxColor;
      this.score += 10;
    });
    document.getElementById("scores").innerHtml = this.score;
  }
}
const array1 = [
  [1, 6],
  [2, 6],
  [2, 7],
];
const arrayTurns1 = [
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
const array2 = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];
const arrayTurns2 = [
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
const array3 = [
  [1, 6],
  [1, 7],
  [2, 6],
  [2, 7],
];
const arrayTurns3 = [
  [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
];
const array4 = [
  [1, 4], //2,4
  [2, 4], //1,4
  [2, 5], //1,5
  [2, 6], //1,6
  [2, 7], //1,7
  [1, 7], //2,7
];
const arrayTurns4 = [
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
const array5 = [
  [1, 4], //3,5
  [1, 5], //4,5
  [2, 5], //4,4
  [3, 5], //4,3
  [4, 5], //4,2
];
const arrayTurns5 = [
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
const shapes = [array1, array2, array3, array4, array5];
const shapeTurns = [
  arrayTurns1,
  arrayTurns2,
  arrayTurns3,
  arrayTurns4,
  arrayTurns5,
];
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "lightblue",
  "purple",
  "pink",
];
