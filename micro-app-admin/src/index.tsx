import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

interface WindowSupport {
  [key: string]: any;
}

const newWindown: Window & WindowSupport = window;
newWindown.renderadmin = (containerId: string) => {
  const rootIdString = containerId;
  const element = document.getElementById(rootIdString);
  const root = ReactDOM.createRoot(element as HTMLElement);
  root.render(<App />);
};

newWindown.unmountadmin = (containerId: string) => {
  const rootIdString = containerId;
  const element = document.getElementById(rootIdString);
  const root = ReactDOM.createRoot(element as HTMLElement);
  root.unmount();
};

if (!document.getElementById("micro-app-admin")) {
  const element = document.getElementById("root");
  const root = ReactDOM.createRoot(element as HTMLElement);
  root.render(<h2>ADMIN</h2>);
}
