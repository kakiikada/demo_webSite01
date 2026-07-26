import {Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const PurchaseLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

    </>
  );
};

export default PurchaseLayout;


