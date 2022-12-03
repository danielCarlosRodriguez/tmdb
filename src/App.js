import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Routes/Home/Home";
import { Series } from "./components/Routes/Series/Series";
import { Peliculas } from "./components/Routes/Peliculas/Peliculas";
import { SerieId } from "./components/Routes/SerieId/SerieId";
import { PeliculaId } from "./components/Routes/PeliculaId/PeliculaId";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <ItemListContainer />
        </NavBar>
      </header>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/peliculas" element={<Peliculas />} />
          <Route exact path="/serie/:id" element={<SerieId />} />
          <Route exact path="/pelicula/:id" element={<PeliculaId />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
