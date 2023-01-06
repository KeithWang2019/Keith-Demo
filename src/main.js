import router from "./router";
import "src/common/scss/main.scss"

import { App } from "@keithwang/keith-core";

let app = new App();
app.use(router);
app.init("app");
