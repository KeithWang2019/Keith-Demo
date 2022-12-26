import { View } from "@keithwang/keith-core"

import "./assets/index.scss";

class SectionII extends View {
  elInputAdd = null;

  constructor(option) {
    super(option);
  }

  render() {
    return (
      <div className="SectionII">
        <h2>动态节第一层{this.$key}</h2>        
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
