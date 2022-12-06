import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modal from "./pages/Modal";
import Question from "./pages/Question";
import { useGlobalContext } from "./context";


function App() {
  const { Homes } = useGlobalContext();
  return (
    <div className="App">
      {Homes ? <Home /> : <Question />}
    </div>
  );
}

export default App;
