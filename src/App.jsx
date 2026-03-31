import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import StatsBar from "./Stats";
import Products from "./product";
import Pricing from "./pricing";
import Footer from "./footer";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  return (
    <>
      <Navbar cartCount={cart.length} setView={setView} />
      <Hero />
      <StatsBar />

      <Products
        cart={cart}
        setCart={setCart}
        view={view}
        setView={setView}
      />

      <Pricing />
      <Footer />
    </>
  );
}

export default App;