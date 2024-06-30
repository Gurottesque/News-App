import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NewsApi } from "./api/NewsApi.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApiProvider api={NewsApi}>
      <App />
    </ApiProvider>
  </BrowserRouter>
);
