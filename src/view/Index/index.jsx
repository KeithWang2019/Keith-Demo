import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

class Index extends View {
  constructor(option) {
    super(option);
  }

  handleDemo(item) {
    // console.log(this.$app.$Router);
    // this.$app.$Router.push({ url: item.url });
    document.location.href = "https://mall.11185.cn/h5/#/index";
  }

  render() {
    return (
      <div className="Index">
        <input
          className="demo-button"
          type="button"
          value="1. 跳转其他公众号网页"
          onClick={() => this.handleDemo()}
        />
      </div>
    );
  }
}

export default Index;
