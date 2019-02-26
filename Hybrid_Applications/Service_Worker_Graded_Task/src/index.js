import React from "react";
import ReactDom from "react-dom";
import './css/index.css';
import Landing from './js/components/Landing';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
 
if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}

const reactTarget = document.getElementById("react-target");

ReactDom.render(<Landing/>, reactTarget)