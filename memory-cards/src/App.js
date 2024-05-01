import { Route, Routes } from "react-router-dom";
import { Levels } from "./components/Levels/Levels";
import { Level } from "./components/Level/Level"
import { Timer } from "./components/Timer/Timer";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Levels />} />
        <Route path="/levels/:level" element={<Level />} />
      </Routes>
    </>

  );
}

export default App;
