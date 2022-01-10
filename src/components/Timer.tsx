import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  setScore: Dispatch<SetStateAction<number>>;
};

export function Timer({ playing, setPlaying, setScore }: Props) {
  // const defaultTime = 10_000;
  const timeLimit = 10_000;

  const [start, setStart] = useState(new Date().getTime());
  const [elapsed, setElapsed] = useState(0);

  function resetTimer() {
    // Needs a delay between the functions or won't work
    setPlaying(false);
    setScore(0);
    setElapsed(0);
  }

  const playingText = playing ? "Stop" : "Start";

  function togglePlay() {
    if (playing) {
      setPlaying(false);
    } else if (elapsed > 0) {
      setStart(new Date().getTime() - elapsed);
      setPlaying(true);
    } else {
      setStart(new Date().getTime());
      setElapsed(0);
      setPlaying(true);
    }
  }

  useEffect(() => {
    if (elapsed >= timeLimit) {
      setPlaying(false);
      setElapsed(timeLimit);
      return;
    }
    if (playing) {
      var myInterval = setInterval(() => {
        const e = new Date().getTime() - start;
        if (e < timeLimit) {
          setElapsed(e);
        } else {
          setElapsed(timeLimit);
        }
      }, 10);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [elapsed, playing, setPlaying, start]);

  function timeLeftStr(elapsed: number): string {
    const stringify = (int: number): string => {
      if (int < 10) {
        return `0${int}`;
      }
      return `${int}`;
    };

    const difference = timeLimit - elapsed;
    const minutes = stringify(Math.floor((difference / 1000 / 60) % 60));
    const seconds = stringify(Math.floor((difference / 1000) % 60));
    const milliseconds = stringify(Math.floor((difference % 1000) / 10));

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div>
      <h3>Timer: {timeLeftStr(elapsed)}</h3>

      {elapsed !== timeLimit && (
        <button onClick={togglePlay}>{playingText}</button>
      )}

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
