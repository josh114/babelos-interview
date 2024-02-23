import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.scss";
import { UserProvider } from "./context/UserContext.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
