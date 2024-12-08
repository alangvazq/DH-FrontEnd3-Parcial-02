import "./App.css";
import CharacterCard from "./components/Card/CharacterCard";
import Navbar from "./components/navbar/Navbar";
import { DATA } from "./utils/api";

function App() {
  return (
    <main>
      <Navbar />
      <section>
        {DATA.map(({tail, character, image, amiiboSeries, price}) => (
          <CharacterCard key={tail}
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