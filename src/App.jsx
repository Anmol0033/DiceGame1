import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Common/Navbar";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<StartGame/>}></Route>
        {/* <Route path="/logout" element={<StartGame/>}></Route> */}
        <Route path="/playgame" element={<GamePlay/>}></Route>
        {/* <Route path="/login" element={<Login/>}></Route> */}
        {/* <Route path="/signup" element={<Signup/>}></Route> */}
      </Routes>
    {/* {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />} */}
    </div>
  );
}

export default App;
