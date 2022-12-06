import Home from "./pages/Home";
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
