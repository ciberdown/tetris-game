class Style {
  constructor(box_size, box_color, gap, box_number) {
    this.box_size = box_size;
    this.box_color = box_color;
    this.gap = gap;
    this.box_number = box_number;
  }
  createStyle() {
    const myElement = document.querySelector("#container");
    myElement.style =
      "  display: grid;grid-template-columns: repeat(10, " +
      this.box_size +
      "px);grid-template-rows: repeat(20, " +
      this.box_size +
      "px);gap: " +
      this.gap +
      "px;";
    for (let i = 1; i <= 200; i++) {
      let newElement = document.createElement("div");
      newElement.style =
        "box-sizing: border-box;display: flex;justify-content: center;align-items: center;background-color: " +
        this.box_color +
        ";font-size: 10px;";
      newElement.id = i;
      this.box_number && (newElement.innerText = i);
      myElement.append(newElement);
    }
  }
}
class Shapes {
  constructor() {}
  createLine(array) {
    array.forEach((num) => {
      if (num > 0 && num < 201) {
        let newElement = document.getElementById(num);
        newElement.style.backgroundColor = "white";
      }
    });
  }
  removeLastArray(array) {
    array.forEach((num) => {
      //first change to main background color
      let newElement = document.getElementById(num);
      newElement !== null && (newElement.style.backgroundColor = "wheat");
    });
  }

  moveLineLeft(array) {
    let newArray = array.map((num) => {
      return num - 1;
    });
    if (newArray[0] % 10 > 0) {
      this.removeLastArray(array);
      this.createLine(newArray);
      return newArray;
    } else {
      return array;
    }
  }
  moveLineRight(array) {
    let newArray = array.map((num) => {
      return num + 1;
    });
    if ((newArray[2] - 1) % 10 === 0) {
      //left edge
      return array;
    } else {
      this.removeLastArray(array);
      this.createLine(newArray);
      return newArray;
    }
  }
  moveLineDown(array) {
    let newArray = array;
    let stop = false;
    array.forEach((num) => {
      num > 190 && (stop = true);
    });
    newArray = array.map((num) => {
      return num + 10;
    })
    if (!stop) {
      this.removeLastArray(array);
      this.createLine(newArray);
      return newArray;
    }else {
      return array;
    }
  }
  checkLineInBox(array) {
    let newArray = array;
    if (array[1] - array[0] === 1 || array[2] - array[1] === 1) {
      //horizontal
      while (newArray[1] % 10 === 1 || newArray[2] % 10 === 1) {
        //check right edge
        newArray = [newArray[0] - 1, newArray[0], newArray[0] + 1];
      }
      while (newArray[0] % 10 === 0) {
        newArray = [newArray[0] + 1, newArray[0] + 2, newArray[0] + 3];
      }
      return newArray;
    } else {
      //vertical
      return array;
    }
  }
  rotateLine(array) {
    let newArray;
    this.removeLastArray(array);
    if (array[1] - array[0] === 1) {
      //if line is horizontal
      let mid_of_array = array[1] - 20;
      newArray = array.map(() => {
        mid_of_array += 10;
        mid_of_array < 0 && (mid_of_array += 10);
        return mid_of_array;
      });
      this.createLine(this.checkLineInBox(newArray));
    } else {
      //if line is vertical
      let mid_of_array = array[1] - 2;
      newArray = array.map((num) => {
        mid_of_array += 1;
        mid_of_array % 10 === 0 && (mid_of_array += 1);
        return mid_of_array;
      });
      this.createLine(this.checkLineInBox(newArray));
    }

    return this.checkLineInBox(newArray);
  }
}

const myStyle = new Style(40, "wheat", 1, true); //create style
myStyle.createStyle();

const shapes = new Shapes();
let my_line = [4, 5, 6]; //create line
shapes.createLine(my_line);

document.getElementById("body").addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.code) {
    case "ArrowLeft":
      my_line = shapes.moveLineLeft(my_line);
      break;
    case "ArrowRight":
      my_line = shapes.moveLineRight(my_line);
      break;
    case "ArrowDown":
      my_line = shapes.moveLineDown(my_line);
      break;
    case "Space":
      my_line = shapes.rotateLine(my_line);
      break;
  }
});
