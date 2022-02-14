import logo from "./logo.svg";
import "./App.css";

import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBox />
      </header>
    </div>
  );
}

export default App;
