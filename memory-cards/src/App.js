import { Game } from "./components/Game/Game";
import { NumbersProvider } from "./contexts/numbersContext";

function App() {
  return (
    <>
      <NumbersProvider>
       <Game />
      </NumbersProvider>
    </>

  );
}

export default App;
