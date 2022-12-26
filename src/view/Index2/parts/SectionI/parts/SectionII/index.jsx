import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

class SectionII extends View {
  elInputAdd = null;

  fieldName = null;
  fieldAge = null;
  fieldResume = null;

  constructor(option) {
    super(option);
  }

  handleShowField() {
    console.log(this.fieldName);
    console.log(this.fieldAge);
    console.log(this.fieldResume);
  }

  getJson() {
    return {
      name: this.fieldName,
      age: this.fieldName,
      resume: this.fieldResume,
    };
  }

  render() {
    return (
      <div className="SectionII">
        <h2>[{this.$key}]动态节第二层</h2>
        <input
          type="button"
          value="删除动态节第二层"
          onClick={() => this.$emit("onDelSelf", this.$key)}
        />
        <input
          type="button"
          value="打印日志"
          onClick={() => this.handleShowField()}
        />
        <br />
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
        <div style={{ padding: "5px" }}>
          <div className="field-section">
            <span>姓名：</span>
            <input
              type="text"
              value={this.fieldName}
              onChange={(event) => (this.fieldName = event.target.value)}
            />
          </div>
          <div className="field-section">
            <span>年龄：</span>
            <input
              type="text"
              value={this.fieldAge}
              onChange={(event) => (this.fieldAge = event.target.value)}
            />
          </div>
          <div className="field-section">
            <span>简历：</span>
            <textarea
              value={this.fieldResume}
              onChange={(event) => (this.fieldResume = event.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionII;
