import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Spenden from "./pages/Spenden";
import Confirmation from "./pages/Conformation"
import './App.css';
import NoPage from "./pages/NoPage";


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/spenden" element={<Spenden/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/confirmation" element={<Confirmation />}></Route>
            <Route path="*" element = {<NoPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
