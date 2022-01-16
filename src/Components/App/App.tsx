import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../screens/Home";
import { Program } from "../../screens/Program";
import { Footer } from "../Footer/Footer";
import { MyHeader } from "../Header/CustomHeader";
import "./App.css";
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
