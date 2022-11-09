import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import MensPage from "./pages/MensPage";


function App() {
 return(
   <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/mens-watches" element={<MensPage />} />
         <Route path="/contact" element={<ContactUsPage />} />
       </Routes>
     </BrowserRouter>
  </>
 );
}

export default App;
