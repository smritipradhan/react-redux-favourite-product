import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Favourite from "./pages/Favourites/Favourite";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
