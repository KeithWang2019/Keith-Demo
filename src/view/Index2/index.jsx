import { ToolKit, View } from "@keithwang/keith-core";

import "./assets/index.scss";

import SectionI from "./parts/SectionI";

class Index2 extends View {
  index = 0;
  items = ["1", "2", "3", "4", "5", "6", "7"];
  refItems = [];

  fieldKeys1 = null;
  fieldKeys2 = null;

  constructor(option) {
    super(option);
  }

  onPreRender() {
    this.fieldKeys2 = this.items.join(";");
  }

  handleAddSectionLevelOne() {
    console.log("增加动态节第一层");
    this.items.push((this.index++).toString());
    this.update();
  }

  handleVConsole() {
    console.log(this.refItems);
    // console.log(this.getJson());
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

  handleChangeKeys() {
    let keys = this.fieldKeys2.split(";");
    this.items = keys;
    this.update();
  }

  getJson() {
    let json = [];
    for (let i = 0; i < this.refItems.length; i++) {
      json.push(this.refItems[i].getJson());
    }
    return json;
  }

  render() {
    return (
      <div className="Index2">
        <h2>#多节增删改查上下移动</h2>
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
        <div className="field-section">
          <span>手动打乱顺序的keys，使用分号分隔：</span> 
          <input
            type="text"
            value={this.fieldKeys2}
            onChange={(event) => (this.fieldKeys2 = event.target.value)}
          />
          <input
            type="button"
            value="变化"
            onClick={() => this.handleChangeKeys()}
          />
        </div>
        <div className="deb">
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
