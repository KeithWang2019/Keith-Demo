import { View } from "@keithwang/keith-core"

class SectionII extends View {
  elInputAdd = null;

  constructor(option) {
    super(option);
  }

  render() {
    return (
      <div style={{ border: "2px solid yello" }}>
        <h2 style={{ color: "blue" }}>动态节第一层{this.$key}</h2>        
        <input
          type="button"
          value="删除动态节第二层"
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
      </div>
    );
  }
}

export default SectionII;
