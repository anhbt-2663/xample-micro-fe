import React from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserHistory } from "@remix-run/router";
import MicroFERouter from "./MicroFERouter";

const { REACT_APP_ADMIN_HOST: adminHost, REACT_APP_USER_HOST: userHost } =
  process.env;

const AdminPage: React.FC<{ history: BrowserHistory }> = ({ history }) => (
  <MicroFERouter history={history} host={adminHost || ""} name="admin" />
);

const UserPage: React.FC<{ history: BrowserHistory }> = ({ history }) => (
  <MicroFERouter history={history} host={userHost || ""} name="user" />
);

function App() {
  const defaultHistory = createBrowserHistory();

  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route
            path="/admin"
            element={<AdminPage history={defaultHistory} />}
          />
          <Route path="/user" element={<UserPage history={defaultHistory} />} />
          <Route path="/" element={<UserPage history={defaultHistory} />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
