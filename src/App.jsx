import Navbar from "./Navbar";
import Hero from "./Hero";
import StatsBar from "./Stats";
import Products from "./product";
import Pricing from "./pricing";
import Footer from "./footer";



function App() {
  return (
    <>
      <Navbar cartCount={3} />
      <Hero />
      <StatsBar />
      <Products />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;