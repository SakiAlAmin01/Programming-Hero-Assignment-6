import Navbar from "./Navbar";
import Hero from "./Hero";
import StatsBar from "./Stats";
import Products from "./product";

function App() {
  return (
    <>
      <Navbar cartCount={3} />
      <Hero />
      <StatsBar />
      <Products />
    </>
  );
}

export default App;