// TODO if username is on leaderboard then highlight

export function Leaderboard() {
  const players = [
    { id: 0, name: "Hammy", score: 40 },
    { id: 1, name: "Samuel", score: 44 },
    { id: 2, name: "Abe", score: 98 },
    { id: 3, name: "Abraham", score: 20 },
    { id: 4, name: "Charlotte", score: 41 },
    { id: 5, name: "Hamuella", score: 8 },
    { id: 6, name: "Hammy", score: 40 },
    { id: 7, name: "Samuel", score: 44 },
    { id: 8, name: "Abe", score: 98 },
    { id: 9, name: "Abraham", score: 20 },
    { id: 10, name: "Abraham", score: 20 },
    { id: 11, name: "Charlotte", score: 41 },
    { id: 12, name: "Hamuella", score: 8 },
    { id: 13, name: "Hammy", score: 40 },
    { id: 14, name: "Samuel", score: 44 },
    { id: 15, name: "Abe", score: 98 },
    { id: 16, name: "Abraham", score: 20 },
    { id: 17, name: "Charlotte", score: 41 },
    { id: 18, name: "Hamuella", score: 8 },
  ];

  return (
    <div>
      <h3 id="leaderboard" className="text-xl py-1">Leaderboard</h3>
        <ul>
          {players.map((player) => (
            <li key={player.id} className="py-1 flex justify-between">
              <span>{player.name}</span>
              <span>{player.score}</span>
            </li>
          ))}
        </ul>
      <a className="underline" href="#leaderboard">To top</a>

    </div>
  );
}
