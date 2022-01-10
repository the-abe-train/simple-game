import { Dispatch, SetStateAction } from "react";

type Props = {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  playing: boolean;
}



export function Game({score, setScore, playing}: Props) {
  

  function click() {
    if (playing) {
      setScore(score + 1);
    }
  }

  return (
    <div id="game">
      <div onClick={click} id="square"></div>
      <p className="game-text">Clicks: {score}</p>
    </div>
  );
}
