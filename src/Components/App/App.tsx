import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "../Footer/Footer";
import { MyHeader } from "../Header/CustomHeader";
import { Home } from "../../Screens/Home";
import { Program } from "../../Screens/Program";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:programType" element={<Program />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
