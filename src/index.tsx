import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import "./lang/i18n";

ReactDOM.render(
  <Suspense fallback={"Loading Pankod Challange ..."}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
