import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

import httpHormal from "../../axios/httpNormal";

class Index extends View {
  constructor(option) {
    super(option);
  }

  handleDemo() {
    document.location.href = "https://mall.11185.cn/h5/#/index";
  }

  handleDemo2() {
    httpHormal({
      url:
        process.env.demo_back_url +
        "getWxConfigParams?url=" +
        location.href.split("#")[0],
      method: "get",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => {
      let wxConfigParams = res.data;

      wx.ready(function () {
        alert("ok");
      });

      wx.error(function (res) {
        alert("no");
      });

      wx.config({
        debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
        appId: wxConfigParams.appId, // 必填，公众号的唯一标识
        timestamp: wxConfigParams.timestamp, // 必填，生成签名的时间戳
        nonceStr: wxConfigParams.nonceStr, // 必填，生成签名的随机串
        signature: wxConfigParams.signature, // 必填，签名
        jsApiList: [], // 必填，需要使用的 JS 接口列表
        openTagList: ["wx-open-launch-weapp"],
      });
    });
  }

  render() {
    return (
      <div className="Index">
        <wx-open-launch-weapp
          id="launch-btn"
          appid="wxc60292d1a49f32d3"
          path="pages/index/index"
        >
          <script type="text/wxtag-template">
            <button class="btn">打开小程序</button>
          </script>
        </wx-open-launch-weapp>
        <input
          className="demo-button"
          type="button"
          value="1. 跳转其他公众号网页"
          onClick={() => this.handleDemo()}
        />
        <input
          className="demo-button"
          type="button"
          value="2. 跳转其他小程序"
          onClick={() => this.handleDemo2()}
        />
      </div>
    );
  }
}

export default Index;
