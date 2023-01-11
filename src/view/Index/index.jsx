import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

import NavigationBar from "./parts/NavigationBar";
import QuickLaunchBar from "./parts/QuickLaunchBar";

class Index extends View {
  constructor(option) {
    super(option);
  }

  handleGoRoute(item) {
    console.log(item);
    // console.log(this.$app.$Router);
    this.$app.$Router.push({ url: item.url });
  }

  render() {
    return (
      <div className="Index">
        <NavigationBar></NavigationBar>
        <div className="container">
          <QuickLaunchBar
            onGoRoute={(item) => this.handleGoRoute(item)}
          ></QuickLaunchBar>
          <div className="content-iframe">
            <div id="app4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
