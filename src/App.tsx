import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MyHeader } from "./Components/Header/MyHeader";
import { Home } from "./Screens/Home";
import { Movies } from "./Screens/Movies";

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
