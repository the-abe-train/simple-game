import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import { HighScore } from "./components/HighScore";
import { Timer } from "./components/Timer";

function App() {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Timer playing={playing} setPlaying={setPlaying} setScore={setScore} />
      <Game score={score} setScore={setScore} playing={playing} />
      <HighScore score={score} />
    </div>
  );
}

export default App;
