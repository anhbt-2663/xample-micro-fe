import { BrowserHistory } from "@remix-run/router";
import React, { useEffect } from "react";

type Props = {
  name: string;
  history: BrowserHistory;
  host: string;
};

interface WindowSupport {
  [key: string]: any;
}

const MicroFERouter: React.FC<Props> = ({ name, history, host }) => {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;
    const renderMicroFrontend = () => {
      const newWindown: Window & WindowSupport = window;
      newWindown[`render${name}`](`micro-app-${name}`);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      const newWindown: Window & WindowSupport = window;
      newWindown[`unmount${name}`] &&
        newWindown[`unmount${name}`](`micro-app-${name}`);
    };
  });

  return (
    <div className={`micro-app-${name}`}>
      <main id={`micro-app-${name}`} />
    </div>
  );
};

export default MicroFERouter;
