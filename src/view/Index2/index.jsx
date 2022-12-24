import { View } from "@keithwang/keith-core";

import SectionI from "./parts/SectionI";

class Index2 extends View {
  index = 0;
  items = ["-1"];
  refItems = [];

  constructor(option) {
    super(option);
  }

  handleAddSectionLevelOne() {
    console.log("增加动态节第一层");
    this.items.push(this.index++);
    this.update();
  }

  handleVConsole() {
    console.log(this.refItems);
  }

  handleDelSectionLevelOne(key) {
    console.log("删除动态节第一层", key);
    this.items = this.items.filter((item) => {
      return item !== key;
    });
    this.update();
  }

  handleUpSectionLevelOne(key) {
    console.log("上移动态节第一层", key);
    let currentIndex = this.items.findIndex((item) => item == key);
    if (currentIndex > 0) {
      let currentItem = this.items[currentIndex];
      let upItem = this.items[currentIndex - 1];
      this.items[currentIndex] = upItem;
      this.items[currentIndex - 1] = currentItem;
      this.update();
    }
  }

  handleDownSectionLevelOne(key) {
    console.log("下移动态节第一层", key);
    let currentIndex = this.items.findIndex((item) => item == key);
    if (currentIndex + 1 < this.items.length) {
      let currentItem = this.items[currentIndex];
      let downItem = this.items[currentIndex + 1];
      this.items[currentIndex] = downItem;
      this.items[currentIndex + 1] = currentItem;
      this.update();
    }
  }

  render() {
    return (
      <div style={{ border: "2px solid black" }}>
        <h2>多节增删改查上下移动</h2>
        <input
          type="button"
          value="增加动态节第一层"
          onClick={() => this.handleAddSectionLevelOne()}
        />
        <input
          type="button"
          value="打日志"
          onClick={() => this.handleVConsole()}
        />
        <div>
          {this.items.map((item) => {
            return (
              <SectionI
                key={item}
                title={item}
                ref={(r) => (this.refItems = r)}
                onDelSelf={(key) => this.handleDelSectionLevelOne(key)}
                onUpSelf={(key) => this.handleUpSectionLevelOne(key)}
                onDownSelf={(key) => this.handleDownSectionLevelOne(key)}
              ></SectionI>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Index2;
