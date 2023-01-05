import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

class NavigationBar extends View {
  constructor(option) {
    super(option);
  }

  render() {
    return (
      <div className="navigation-bar">
        <a className="project-name" href="#">Keith Demo</a>
      </div>
    );
  }
}

export default NavigationBar;
