import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <ToastContainer />
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routing />
          </BrowserRouter>
        </AuthContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
