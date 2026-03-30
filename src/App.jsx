import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Navbar cartCount={3} />
      <Hero />
    </>
  );
}

export default App;