import { mount } from "ripple";
import { App } from "./App.ripple";
import "./styles.css";

import { inject } from "@vercel/analytics"

inject()

mount(App, {
  target: document.getElementById("root"),
});