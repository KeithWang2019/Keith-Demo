import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

import SectionII from "./parts/SectionII";

class SectionI extends View {
  elInputAdd = null;

  index = 0;
  items = [];

  constructor(option) {
    super(option);
  }

  handleAddSectionLevelTwo() {
    console.log("增加动态节第二层");
    this.items.push(this.index++);
    this.update();
  }

  handleDelSectionLevelTwo(key) {
    console.log("删除动态节第二层", key);
    this.items = this.items.filter((item) => {
      return item !== key;
    });
    this.update();
  }

  handleUpSectionLevelTwo(key) {
    console.log("上移动态节第二层", key);
    let currentIndex = this.items.findIndex((item) => item == key);
    if (currentIndex > 0) {
      let currentItem = this.items[currentIndex];
      let upItem = this.items[currentIndex - 1];
      this.items[currentIndex] = upItem;
      this.items[currentIndex - 1] = currentItem;
      this.update();
    }
  }

  handleDownSectionLevelTwo(key) {
    console.log("下移动态节第二层", key);
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
      <div className="SectionI">
        <h2>动态节第一层{this.$key}</h2>
        <input
          type="button"
          value="增加动态节第二层"
          ref={(r) => (this.elInputAdd = r)}
          onClick={() => this.handleAddSectionLevelTwo()}
        />
        <input
          type="button"
          value="删除动态节第一层"
          onClick={() => this.$emit("onDelSelf", this.$key)}
        />
        <input
          type="button"
          value="上移"
          onClick={() => this.$emit("onUpSelf", this.$key)}
        />
        <input
          type="button"
          value="下移"
          onClick={() => this.$emit("onDownSelf", this.$key)}
        />
        {this.items.map((item) => {
          return (
            <SectionII
              key={item}
              title={item}
              ref={(r) => (this.refItems = r)}
              onDelSelf={(key) => this.handleDelSectionLevelTwo(key)}
              onUpSelf={(key) => this.handleUpSectionLevelTwo(key)}
              onDownSelf={(key) => this.handleDownSectionLevelTwo(key)}
            ></SectionII>
          );
        })}
      </div>
    );
  }
}

export default SectionI;
