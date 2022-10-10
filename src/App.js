import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import PlanetSummary from "./Components/PlanetSummary/PlanetSummary";
import PlanetStats from "./Components/PlanetStats/PlanetStats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlanetSummary />
      <PlanetStats />
    </div>
  );
}

export default App;
