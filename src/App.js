import Header from "./components/Header/Header";
import Cards from "./components/Main/Cards/Cards";
import Network from "./components/Main/Network/Network";
import Services from "./components/Main/Services/Services";
import Tab from "./components/Main/Tab/Tab";
import Velocity from "./components/Main/Velocity/Velocity";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <main>
          <Velocity/>
          <Cards />
          <Services />
          <Tab/>
          <Network />
        </main>
      <Footer />
    </div>
  );
}

export default App;
