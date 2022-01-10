import { useState } from "react";

type Props = {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user?: {
    name: string;
    place: number;
  };
  setUser?: React.Dispatch<
    React.SetStateAction<{
      name: string;
      place: number;
    }>
  >;
};

function UserGreeting({ user, isLoggedIn, setLoggedIn }: Props) {
  
  return (
    <div>
      {user && (
        <div>
          <p>Hello {user.name}</p>
          <p>Leaderboard place: {user.place}</p>
        </div>
      )}
      <button
        onClick={() => setLoggedIn(!isLoggedIn)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 my-5 rounded"
      >
        Log-out
      </button>
    </div>
  );
}

function GuestGreeting({ isLoggedIn, setLoggedIn }: Props) {

  const [username, setUsername] = useState('');

  function changeName(input: React.ChangeEvent<HTMLInputElement>): void {
    const text = input.target.value;
    const regex = /[A-Za-z]{0,8}/
    const result = text.match(regex)
    if (result) setUsername(result[0].toUpperCase());
  }

  return (
    <div>
      <p className="py-5">Log-in to join the leaderboard</p>
      <form
        className="flex flex-col gap-3"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="username">Username</label>
        <input className="w-full" id="username" type="text" value={username} onChange={e => changeName(e)} />
        <label htmlFor="password">Password</label>
        <input className="w-full" id="password" type="password" />
        <button
          onClick={() => setLoggedIn(!isLoggedIn)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-5 mx-7 rounded"
          type="submit"
        >
          Log-in
        </button>
      </form>
    </div>
  );
}

export function Settings() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "Hamuel", place: 3 });

  return (
    <div>
      <div>
        {isLoggedIn ? (
          <UserGreeting
            user={user}
            isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn}
          />
        ) : (
          <GuestGreeting
            user={user}
            setUser={setUser}
            isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn}
          />
        )}
      </div>
    </div>
  );
}
