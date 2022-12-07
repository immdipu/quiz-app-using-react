
import Home from "./pages/Home";
import Question from "./pages/Question";
import { useGlobalContext } from "./context";
import Modal from "./pages/Modal";


function App() {
  const { Homes, modal } = useGlobalContext();

  return (
    <>
      {modal && <Modal />}
      {Homes ? <Home /> : <Question />}
      <h3 className="bg-white fixed w-full text-center hover:scale-[1.2] transition-all duration-300 ease-linear shadow-lg text-zinc-500 bottom-0"> <a href="https://github.com/immdipu" rel="noreferrer" target="_blank">Made by Dipu</a></h3>
    </>
  );
}

export default App;
