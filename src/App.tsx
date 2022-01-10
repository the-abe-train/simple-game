import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import { HighScore } from "./components/HighScore";
import { Leaderboard } from "./components/Leaderboard";
import { Settings } from "./components/Settings";
import { Timer } from "./components/Timer";

// TODO add router and log-in/sign-up page
// TODO connect to back-end

function App() {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="bg-blue-300 h-full py-10  ">
      <div className="flex flex-col gap-12 justify-center ">
        <Timer playing={playing} setPlaying={setPlaying} setScore={setScore} />
        <Game score={score} setScore={setScore} playing={playing} />
        <HighScore score={score} />
      </div>
      <div className=" py-3 h-full px-3 w-64 bg-orange-200 text-gray-800 fixed top-0 left-0">
        <Settings />
        <div className="fixed bottom-0 py-3">
        <p>By The Abe Train</p>
      </div>
      </div>
      <div className=" overflow-scroll py-3 h-full px-3 w-48 bg-orange-200 text-gray-800 fixed top-0 right-0">
        <Leaderboard />
        
      </div>
    </div>
  );
}

export default App;
