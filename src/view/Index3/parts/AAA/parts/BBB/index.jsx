import { View } from "@keithwang/keith-core"

class BBB extends View {
  count = 0;

  numbers = ["A", "B"];
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

  render(args) {
    return (
      <div style={{ border: "2px solid black" }}>
        <ul>{this.listItems}</ul>
        <button onClick={(e) => this.handleClick(e)}>BBB{this.count}</button>
        <h1></h1>
      </div>
    );
  }
}

export default BBB;
