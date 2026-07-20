
import { useState } from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import HamburgerButton from "./HamburgerButton";
import Navigation from "./Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-layout">
        <div className="header-layout_left">
          <HeaderLogo
          />
        </div>
        <div className="header-layout_right">
          <Navigation
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}/>
        </div>
        <div className="header-icon">
          <HamburgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </header>
  )
}