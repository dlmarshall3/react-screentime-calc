import "./App.css";
import Layout from "./pages/layout";
import OptionsStorage from "./contexts/OptionsContext";
import HoursStorage from "./contexts/HoursContext";

function App() {
  return (
    <HoursStorage>
      <OptionsStorage>
        <Layout />
      </OptionsStorage>
    </HoursStorage>
  );
}

export default App;
