import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import ListBeers from "./pages/ListBeers";
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer"
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listbeers" element={<ListBeers />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/singlebeer/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;