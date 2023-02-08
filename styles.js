
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
        " margin-top: 30px; display: grid;grid-template-columns: repeat(10, " +
        this.box_size +
        "px);grid-template-rows: repeat(20, " +
        this.box_size +
        "px);gap: " +
        this.gap +
        "px;";
      for (let i = 1; i <= 15; i++) {
        for (let j = 1; j <= 10; j++) {
          let newElement = document.createElement("div");
          newElement.style =
            "box-sizing: border-box;display: flex;justify-content: center;align-items: center;background-color: " +
            this.box_color +
            ";font-size: 11px;";
          newElement.id = i + "," + j;
          this.box_number && (newElement.innerText = i + "," + j);
          myElement.append(newElement);
        }
      }
    }
  }
  //export default Style;