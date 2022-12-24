import { View } from "@keithwang/keith-core"

import BBB from "./parts/BBB";

class AAA extends View {
  count = 1;

  numbers = [1, 2, 3, 4, 5];
  listItems = this.numbers.map((number) => <li>{number}</li>);

  constructor(option) {
    super(option);
  }

  handleClick(e) {
    e.preventDefault();
    this.count++;
    this.numbers.push(this.count);
    this.listItems = this.numbers.map((number) => <li>{number}</li>);
    this.update();
  }

  handleMoveUp(e) {
    console.log("up");
  }

  handleMoveDown(e) {
    console.log("down");
  }

  render() {
    return (
      <div style={{ border: "2px solid blue" }}>
        <ul>{this.listItems}</ul>
        <button
          onClick={(e) => {
            this.handleClick(e);
          }}
          txt={this.count}
        >
          AAA{this.count.toString()}
        </button>
        <input type="button" value="向上移动" onClick={this.handleMoveUp()} />
        <input type="button" value="向下移动" onClick={this.handleMoveDown()} />
        <h1>{this.count}</h1>
        <BBB />
        <BBB />
      </div>
    );
  }
}

export default AAA;
