import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import { DATA } from "./utils/api";

function App() {
  return (
    <main>
      <Navbar />
      {DATA.map((character) => (
        <CharacterCard key={character.tail} {...character}
        />
      ))}
    </main>
  );
}

export default App;
