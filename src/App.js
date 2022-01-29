import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowDoc from "./components/ShowDoc";
import NewDoc from "./components/NewDoc";

//funtion to redirect to another component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exaxt element={<NewDoc />} />
          <Route path="/view/:id" element={<ShowDoc />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
