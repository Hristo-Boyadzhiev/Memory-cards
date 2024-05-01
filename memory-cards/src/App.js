import { Route, Routes } from "react-router-dom";
import { Levels } from "./components/Levels/Levels";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Levels />} />
      </Routes>
    </>

  );
}

export default App;
