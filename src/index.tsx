import React from "react";
import ReactDOM from "react-dom/client";
import "./core/imports.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "./views/NotFound404.view";
import Contact from "./views/Contact.view";
import Home from "./views/Home.view";
import UserView from "./views/User.view";
import CalView from "./views/Calc.view";
import NavBar from "./components/NavBar";

import GlobalStyles from "./core/globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contato" element={<Contact />} />
          <Route path="usuario/:userId" element={<UserView />} />
          <Route path="calc/:a/:b" element={<CalView />} />
          <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
