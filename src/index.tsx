import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CardContext from "./Context/CardContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtai6Q-lSKTquZK3MGXnIrng1F42LMc2s",
  authDomain: "coderhouse-ecommerce-1b7dd.firebaseapp.com",
  projectId: "coderhouse-ecommerce-1b7dd",
  storageBucket: "coderhouse-ecommerce-1b7dd.appspot.com",
  messagingSenderId: "76273923882",
  appId: "1:76273923882:web:8d54fba829c81188c81053"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CardContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CardContext>
  </React.StrictMode>
);

reportWebVitals();
