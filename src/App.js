import "./App.css";
import { ActivityPage } from "./components/ActivityPage/Activity";
import { Homepage } from "./components/Sidebar/Homepage/Homepage";

import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homepage />
      <ActivityPage />
    </div>
  );
}

export default App;
