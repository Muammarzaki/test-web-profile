import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import VisiMisi from "./pages/VisiMisi";
import Dekanat from "./pages/Dekanat";
import ProgramStudi from "./pages/ProgramStudi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sejarah" element={<Sejarah />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/dekanat" element={<Dekanat />} />
            <Route
              path="/program-studi/:programId"
              element={<ProgramStudi />}
            />
            <Route
              path="/program-studi/:programId/:tenagaId"
              element={<ProgramStudi />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
