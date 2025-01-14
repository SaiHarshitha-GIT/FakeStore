import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/home/home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import bootstrap from "bootstrap";
import { DataBinding } from "./components/data-binding/data-binding";
import Card from "./components/card";
import Categories from "./components/categories";
import Login from "./components/login";
import ContextDemo from "./components/context-demo/context-demo";
import ReducerDemo from "./components/reducer-demo/reducer-demo";
import FakeStore from "./components/fake-store/fake-store";
import FakeStorePractise from "./components/fake-store/fake-store-practise";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FakeStorePractise />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
