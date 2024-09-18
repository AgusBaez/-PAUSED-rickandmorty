import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
