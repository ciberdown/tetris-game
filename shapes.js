class Shape {
  constructor(arr, turns, color, filledPlaces) {
    this.shape = arr;
    this.stop = false;
    this.shapeTurns = turns; //shape + each of turns = new trun of shape
    this.turnIndex = 0; //switch between shapeTurns
    this.shapeColor = color;
    this.filledPlaces = filledPlaces;
  }
  draw(array) {
    if (array === undefined) {
      array = this.checkEdges(this.shape);
    } else {
      array = this.checkEdges(array);
    }
    if (!this.stop) {
      this.removeLastShape();
      this.shape = array;
      this.addShape(array);
    }
  }
  in(item, list) {
    // let a = filledPlaces;
    // let b = list;
    let a = item;
    let b = list;
    b = b.map((item) => {
      return item.toString();
    });
    if (b.indexOf(a.toString()) !== -1) {
      return true;
    } else {
      return false;
    }
    // filledPlaces.push([
    //   parseInt(item.split(",")[0]),
    //   parseInt(item.split(",")[1]),
    // ]);
  }
  removeLastShape() {
    this.shape !== undefined &&
      this.shape.map((el) => {
        document.getElementById(el).style.backgroundColor = boxColor;
      });
  }
  addShape(array) {
    array !== undefined &&
      array.map((el) => {
        document.getElementById(el).style.backgroundColor = this.shapeColor;
      });
  }
  checkEdges(array) {
    for (let i = 0; i < array.length; i++) {
      //checkLeftEdge
      //a = [[1,0],[1,1],[2,0],[2,1]]
      if (array[i][1] < 1) {
        //a[2][1] = 0
        let rem = 1 - array[i][1]; //1
        array = array.map((el) => {
          return [el[0], el[1] + rem]; //a = [[1,1],[1,2],[2,1],[2,2]]
        });
      }

      //added from here:
      //checkRightEdge
      if (array[i][1] > 10) {
        //a[2][1] = 11
        let rem = array[i][1] - 10; //1
        array = array.map((el) => {
          return [el[0], el[1] - rem]; //a = [[1,10],[1,11],[2,11],[2,11]]
        });
      }
      //checkTopEdge
      if (array[i][0] < 1) {
        //a[2][0] = 0
        let rem = 1 - array[i][0]; //1
        array = array.map((el) => {
          return [el[0] + rem, el[1]]; //a = [[1,10],[1,8],[1,9],[0,10]]
        });
      }
    }
    return array;
  }

  checkToStop(array) {
    !this.stop &&
      array.forEach((element) => {
        element[0] > 14 && (this.stop = true);
      });
  }
  down() {
    let array = this.shape;
    this.checkEmpty(array);
    this.checkToStop(array);
    if (!this.stop) {
      array = array.map((element) => {
        return [element[0] + 1, element[1]];
      });
      this.draw(array); //first remove last one and draw new one
      this.shape = array; // then add new shape to this object
    } else {
      array = [false, this.shape];
    }
    return array;
  }
  checkEmpty(array) {
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (this.in(item, this.filledPlaces)) {
        this.stop = true;
        break;
      }
    }
  }
  turnShape() {
    let turnForm = this.shapeTurns[this.turnIndex];
    let newArray = this.shape.map((el, index) => {
      return [el[0] + turnForm[index][0], el[1] + turnForm[index][1]];
    });
    this.turnIndex = (this.turnIndex + 1) % this.shapeTurns.length;
    this.draw(newArray);
  }
  left() {
    let array = this.shape;
    if (!this.stop) {
      array = array.map((element) => {
        return [element[0], element[1] - 1];
      });
      array = this.checkEdges(array);
      this.draw(array); //first remove and draw last one
      this.shape = array; // then add new shape
    }
  }
  right() {
    let array = this.shape;
    if (!this.stop) {
      array = array.map((element) => {
        return [element[0], element[1] + 1];
      });
      array = this.checkEdges(array);
      this.draw(array); //first remove and draw last one
      this.shape = array; // then add new shape
    }
  }
}
