import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Page/Home/root";
import { Navigation } from "./Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass)
function App() {
  return (
    <div className="w-full min-h-screen">
      <Router>
        <Header/>
        <Navigation/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
