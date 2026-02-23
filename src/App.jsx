import { useState, useEffect } from "react";
import "./App.css";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Audio from "./components/Audio";
import Cart from "./components/Cart";

import Landing from "./pages/Landing";
import StickySection from "./pages/StickySection";
import Castel from "./pages/Castel";
import CandyClassics from "./pages/CandyClassics";
import BestSellers from "./pages/BestSellers";
import Carosal from "./pages/Carosal";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);

  const openMenu = () => {
    setisCartOpen(false);
    setisMenuOpen(true);
  };

  const closeMenu = () => setisMenuOpen(false);

  const toggleCart = () => {
    setisMenuOpen(false);
    setisCartOpen((prev) => !prev);
  };

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothTouch: false,
    });

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        toggleCart={toggleCart}
      />

      <Cart isCartOpen={isCartOpen} setisCartOpen={setisCartOpen} />
      <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

      <Audio />
      <Landing />
      <StickySection />
      <Castel />
      <CandyClassics />
      <BestSellers />
      <Carosal />
    </>
  );
}

export default App;
