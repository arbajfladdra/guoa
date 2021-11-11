import "./App.css";

//Components
//---------------main components-----------------
import { Header, Home } from "./components";
function App() {
  return (
    <div className="row app-wrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;
