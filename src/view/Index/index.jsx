import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

import Navbar from "@parts/Navbar";

class Index extends View {
  constructor(option) {
    super(option);
  }

  handleClick() {}

  render() {
    return (
      <div className="Index">
        <Navbar></Navbar>
        <div></div>
      </div>
    );
  }
}

export default Index;
