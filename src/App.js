import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profiles from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar/>
      {/* <Profiles/> */}
      <Dialogs/>
    </div>
  );
}

export default App;
