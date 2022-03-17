import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Homepage from "./pages/Homepage";
import Jewelry from "./pages/Jewelry";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/jewelry" element={<Jewelry/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
