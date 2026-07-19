import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import TicketForm from "./pages/TicketForm/TicketForm";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicketForm" element={<TicketForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


