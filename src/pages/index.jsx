import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../components/Home';
import Detail from "../components/Detail";
import Login from "../components/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:user" element={<Detail/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
  
export default Router;