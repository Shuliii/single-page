import Header from "./components/Header";
import SectionResume from "./components/SectionResume";
import SectionProject from "./components/SectionProject";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionResume />
        <SectionProject />
      </main>

      <Footer />
    </>
  );
}

export default App;
