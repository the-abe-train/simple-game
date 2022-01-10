import { Dispatch, SetStateAction } from "react";

type Props = {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  playing: boolean;
};

export function Game({ score, setScore, playing }: Props) {
  function click() {
    if (playing) {
      setScore(score + 1);
    }
  }

  return (
    <div className="my-1 mx-auto w-fit">
      <div
        onClick={click}
        className="w-36 h-36 bg-blue-900 flex justify-center items-center"
        style={{ userSelect: 'none' }}
      >
        <p className="text-center  text-white">Click me!</p>
      </div>
      <p className="text-center">Clicks: {score}</p>
    </div>
  );
}
