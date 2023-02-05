class Shape {
  constructor(arr, turns, color) {
    this.shape = arr;
    this.stop = false;
    this.shapeColor = color;
  }
  draw(array) {
    array = this.checkEdges(array);
    if (!this.stop) {
      this.removeLastShape();
      this.shape = array;
      this.addShape(array);
    }
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
    this.checkToStop(array);
    if (!this.stop) {
      array = array.map((element) => {
        return [element[0] + 1, element[1]];
      });
      this.draw(array);//first remove and draw last one
      this.shape = array;// then add new shape
    }
    console.log(array);
    this.stop && (array = false);
    return array;
  }
}
