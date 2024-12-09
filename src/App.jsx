import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Character from "./pages/character/Character";
import Favorites from "./pages/favorites/Favorites"; // Importa el nuevo componente
import { FavoritesProvider } from "./context/FavoritesContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="/favorites" element={<Favorites />} /> {/* Añade esta línea */}
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </Router>
    </FavoritesProvider>
  );
}

export default App;