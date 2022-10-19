import "./App.css";
import { Landing } from "./components/layout/Landing";
import ResponsiveAppBar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Landing />
    </div>
  );
}

export default App;
