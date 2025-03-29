import React from "react";
import ReactDOM from "react-dom/client";
import "./core/imports.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "./views/NotFound404.view";
import Home from "./views/Home.view";

import GlobalStyles from "./core/globalStyles";
import EditoresListView from "./views/EditoresList.view";
import PostCreateView from "./views/PostCreate.view";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editores" element={<EditoresListView />} />
          <Route path="/post/criar" element={<PostCreateView />} />
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
