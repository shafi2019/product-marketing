import {} from "antd"
import './App.css';
import Navigation from "./Componets/Navigation";
import Content from "./Componets/Content";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
