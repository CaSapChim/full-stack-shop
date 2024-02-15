import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Page/Home/root";
import { Navigation } from "./Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "./Sidebar";

library.add(faMagnifyingGlass);
function App() {
  return (
    <div className="font-inter min-h-screen w-full overflow-hidden">
      <Router>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 overflow-y-auto max-w-6xl mx-auto">
            <div className="px-6">
              <Navigation />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
