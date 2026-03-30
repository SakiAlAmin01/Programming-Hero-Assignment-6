import Navbar from "./Navbar";
import Hero from "./Hero";
import StatsBar from "./Stats";
import Products from "./product";
import Pricing from "./pricing";


function App() {
  return (
    <>
      <Navbar cartCount={3} />
      <Hero />
      <StatsBar />
      <Products />
      <Pricing />
    </>
  );
}

export default App;