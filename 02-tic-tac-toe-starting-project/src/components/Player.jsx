import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleClickEdit = () => {
    setIsEdit((edit) => !edit);

    if (isEdit) onChangeName(symbol, playerName);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            name="playerName"
            required
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEdit}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
