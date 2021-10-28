import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profiles from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar/>
      <Profiles/>
    </div>
  );
}

export default App;
