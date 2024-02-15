import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Page/Home/root";
import { Navigation } from "./Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);
function App() {
  return (
    <div className="font-inter min-h-screen h-[1000vh] w-full">
      <Router>
        <Header />
        <Navigation />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
