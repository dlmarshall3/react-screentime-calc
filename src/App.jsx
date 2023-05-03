import "./App.css";
import Layout from "./pages/layout";
import HoursStorage from "./contexts/HoursContext";
import CalculateStorage from "./contexts/CalculateContext";

function App() {
  return (
    <HoursStorage>
      <CalculateStorage>
        <Layout />
      </CalculateStorage>
    </HoursStorage>
  );
}

export default App;
