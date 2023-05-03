import "./App.css";
import Layout from "./pages/layout";
import HoursStorage from "./contexts/HoursContext";
import CalculateStorage from "./contexts/CalculateContext";
import AboutStorage from "./contexts/AboutContext";

function App() {
  return (
    <HoursStorage>
      <CalculateStorage>
        <AboutStorage>
          <Layout />
        </AboutStorage>
      </CalculateStorage>
    </HoursStorage>
  );
}

export default App;
