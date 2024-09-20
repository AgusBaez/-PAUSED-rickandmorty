import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { CharacterPage } from "./pages/Character";

function App() {
  return (
    <>
      <Header />
      <Home />
      <CharacterPage />
      <About />
    </>
  );
}

export default App;
