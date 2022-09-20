import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

interface WindowSupport {
  [key: string]: any;
}

const newWindown: Window & WindowSupport = window;
newWindown.renderuser = (containerId: string) => {
  const rootIdString = containerId;
  const element = document.getElementById(rootIdString);
  const root = ReactDOM.createRoot(element as HTMLElement);
  root.render(<App />);
};

newWindown.unmountuser = (containerId: string) => {
  const rootIdString = containerId;
  const element = document.getElementById(rootIdString);
  const root = ReactDOM.createRoot(element as HTMLElement);
  root.unmount();
};

if (!document.getElementById("micro-app-user")) {
  const element = document.getElementById("root");
  const root = ReactDOM.createRoot(element as HTMLElement);
  root.render(<h2>USER</h2>);
}
