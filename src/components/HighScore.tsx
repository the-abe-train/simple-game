import { useEffect, useState } from "react";

type Props = {
  score: number;
}

export function HighScore({score}: Props) {

  const [highScore, setHighScore] = useState(score);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore])

  return (
    <p className="text-center">High score: {highScore}</p>
  )
}