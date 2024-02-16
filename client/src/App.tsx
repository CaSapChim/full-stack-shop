import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Page/Home/root";
import { Navigation } from "./Navigation";
import { Sidebar } from "./Sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faHouse);
function App() {
  return (
    <div className="max-h-dvh w-full overflow-hidden font-inter">
      <Router>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="h-dvh  flex-1 overflow-y-scroll">
            <div className="mx-auto max-w-6xl px-5">
              <Navigation />
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
