import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Paginas/Home";
import Contato from "./assets/Paginas/Contato";
import Conteudo from "./assets/Paginas/Conteudo";
import Conteudo2 from "./assets/Paginas/Conteudo2";


function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/conteudo" element={<Conteudo />} />
        <Route path="/conteudo2" element={<Conteudo2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;       