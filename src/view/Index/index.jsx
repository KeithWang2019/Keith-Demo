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
        <a
          className="weapp_text_link wx_tap_link"
          style="font-size:17px;"
          data-miniprogram-appid="wxc60292d1a49f32d3"
          data-miniprogram-path="pages/index/index"
          data-miniprogram-nickname="来电pro"
          href=""
          data-miniprogram-type="text"
          data-miniprogram-servicetype=""
        >
          xxx
        </a>
      </div>
    );
  }
}

export default Index;
