import "./App.css";
import CharacterCard from "./components/card/CharacterCard";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import { getCharacters } from "./utils/api";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data.amiibo);
    };

    fetchCharacters();
  }, []);

  return (
    <main>
      <Navbar />
      <div>
        <Contact />
      </div>
      <section>
        {characters.map(({ tail, character, image, amiiboSeries, price }) => (
          <CharacterCard
            key={tail}
            character={character}
            price={price}
            image={image}
            amiiboSeries={amiiboSeries}
          />
        ))}
      </section>
    </main>
  );
}

export default App;