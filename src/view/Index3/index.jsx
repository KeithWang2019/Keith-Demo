import { View } from "@keithwang/keith-core"

import AAA from "./AAA/index.jsx";

class Index3 extends View {
  aaa = [];
  arr = [];
  aaa2 = ["a"];

  constructor(option) {
    super(option);
  }

  handleClickAdd() {
    this.aaa2.push("a");
    this.update();
  }

  handleClickSub() {
    this.aaa2.pop();
    this.update();  
  }

  render() {
    return (
      <div style={{ border: "2px solid red" }}>
        <h2>Index 3</h2>
        <input
          type="button"
          value="Index3+"
          onClick={(e) => this.handleClickAdd(e)}
        ></input>
        <input
          type="button"
          value="Index3-"
          onClick={(e) => this.handleClickSub(e)}
        ></input>
        {this.aaa2.map((item, index) => {
          return <AAA></AAA>;
        })}
        <ul>
          {this.arr.map((item, index) => {
            return (
              <div key={index} ref={(obj) => this.aaa.push(obj)}>
                {item}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index3;
