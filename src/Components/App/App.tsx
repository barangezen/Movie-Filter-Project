import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "../Footer/Footer";
import { MyHeader } from "../Header/MyHeader";
import { Home } from "../../Screens/Home";
import { Movies } from "../../Screens/Movies";
import { Series } from "../../Screens/Series";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
