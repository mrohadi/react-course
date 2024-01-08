import { useRef, useState } from "react";

export default function Player() {
  console.log("Player Component");
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playerName = useRef();

  const handleSubmitenteredPlayerName = () => {
    setEnteredPlayerName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown player"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleSubmitenteredPlayerName}>Set Name</button>
      </p>
    </section>
  );
}
