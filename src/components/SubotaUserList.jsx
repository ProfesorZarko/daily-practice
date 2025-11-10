// UserList.jsx
import React from "react";

export default function UserList({ users = [], onClear, onRemove }) {
  return (
    <div>
      <h3>Lista korisnika ({users.length})</h3>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.firstName} ({u.age}){" "}
            <button onClick={() => onRemove(i)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={onClear}>Obriši sve</button>
    </div>
  );
}
