import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteContext from "./contexts/favoriteContext";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <ToastContainer />
        <AuthContextProvider>
        <FavoriteContext>
          <BrowserRouter>
            <Navbar />
            <Routing />
          </BrowserRouter>
        </FavoriteContext>
        </AuthContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
