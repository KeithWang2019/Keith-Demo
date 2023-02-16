import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

class Index extends View {
  constructor(option) {
    super(option);
  }

  handleDemo(item) {
    alert("ok");
    // console.log(this.$app.$Router);
    // this.$app.$Router.push({ url: item.url });
  }

  render() {
    return (
      <div className="Index">
        <input
          className="demo-button"
          type="button"
          value="测试"
          onClick={() => this.handleDemo()}
        />
      </div>
    );
  }
}

export default Index;
