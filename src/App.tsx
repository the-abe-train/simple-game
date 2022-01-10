import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import { HighScore } from "./components/HighScore";
import { Timer } from "./components/Timer";

// TODO add router and log-in/sign-up page
// TODO connect to back-end


function App() {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col gap-12 justify-center bg-blue-300 h-full ">
      <Timer playing={playing} setPlaying={setPlaying} setScore={setScore} />
      <Game score={score} setScore={setScore} playing={playing} />
      <HighScore score={score} />
    </div>
  );
}

export default App;
