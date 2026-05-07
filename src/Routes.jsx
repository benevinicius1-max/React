import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import About from "./pages/About/About.jsx";

const RoutesApp = () => {
   return(
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />}exact />
               <Route path="/About" element={<About />} />
           </Routes>
       </BrowserRouter>
   )
}

export default RoutesApp;