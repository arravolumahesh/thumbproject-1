import "./page.css";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Newfile from "./components/Newfile";
import Uploadfile from "./components/Uploadfile";
import Recentfile from "./components/Resentfile";

const App = () => (
  <>
    <div className="app-container">
      <Dashboard />
      <div className="app-container-1">
        <Header />
        <Newfile />
        <div className="app-container-2">
          <Uploadfile />
          <Recentfile />
        </div>
      </div>
    </div>
  </>
);

export default App;