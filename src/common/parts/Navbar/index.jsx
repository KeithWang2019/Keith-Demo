import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

class Navbar extends View {
  constructor(option) {
    super(option);
  }

  render() {
    return (
      <div className="navbar-fixed-top">
        <a className="project-name" href="#">Keith Demo</a>
      </div>
    );
  }
}

export default Navbar;
