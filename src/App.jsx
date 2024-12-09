import "./App.css";
import CharacterCard from "./components/Card/CharacterCard";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import { DATA } from "./utils/api";

function App() {
  return (
    <main>
      <Navbar />
      <div>
        <Contact />
      </div>
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