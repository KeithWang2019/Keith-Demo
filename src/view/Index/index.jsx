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
        "https://demo.cangsg.com:8081/getWxConfigParams?url=" +
        location.href.split("#")[0],
      method: "get",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => {
      alert(JSON.stringify(res));
    });
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
