import { View } from "@keithwang/keith-core";

class SectionI extends View {
  elInputAdd = null;

  index = 0;
  items = ["-1"];

  constructor(option) {
    super(option);
  }

  handleAddSectionLevelTwo() {
    console.log("增加动态节第二层");
    this.items.push(this.index++);
    this.update();
  }

  render() {
    return (
      <div style={{ border: "2px solid blue" }}>
        <h2 style={{ color: "blue" }}>动态节第一层{this.$key}</h2>
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
        {/* {this.items.map((item) => {
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
        })} */}
      </div>
    );
  }
}

export default SectionI;
