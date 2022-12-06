import Home from "./pages/Home";
import Question from "./pages/Question";
import { useGlobalContext } from "./context";


function App() {
  const { Homes } = useGlobalContext();
  return (
    <div className="App">
      {Homes ? <Home /> : <Question />}
      <h3 className="bg-white absolute w-full text-center shadow-lg text-zinc-500 bottom-0">Made by Dipu</h3>
    </div>
  );
}

export default App;
