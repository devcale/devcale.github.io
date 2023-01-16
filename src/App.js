import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";

import "./App.css";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-sections">
        <Banner />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
