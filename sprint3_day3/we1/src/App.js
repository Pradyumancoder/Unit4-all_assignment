import { AllRouter } from "./Components/AllRouter";

import { Navbar } from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRouter />
    </div>
  );
}
