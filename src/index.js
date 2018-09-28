import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./containers/App";

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const MOUNT_NODE = document.getElementById("root");
const PAGE_NAME = getParameterByName("page") || "ats";

(() => {
  ReactDOM.render(<App pageName={PAGE_NAME} />, MOUNT_NODE);
})();
