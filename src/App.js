import {
  About, Contact,
  // Blogs,
  Footer, Header,
  Hero, Portfolio, Resume
} from "./app/components/sections";

function App() {
  return (
    
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      {/* <Blogs /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
