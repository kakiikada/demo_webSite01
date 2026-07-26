import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import PurchaseLayout from "./layouts/PurchaseLayout";
import Home from "./pages/Home/Home";
import TicketForm from "./pages/TicketForm/TicketForm";


function App() {
  return (
    <Routes>
      <Route element={ <DefaultLayout />} >
        <Route path="/" element={<Home />} />

      </Route>
      <Route element={ <PurchaseLayout />} >
        <Route path="/TicketForm" element={<TicketForm />} />
      </Route>
    </Routes>
  );
}

export default App;


