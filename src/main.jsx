import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { FormContextProvider } from "./utils/form-context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FormContextProvider>
    <App />
  </FormContextProvider>
);
