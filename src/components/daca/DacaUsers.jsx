import React from 'react'

export default function DacaUsers({users, onRemove: removeUser}) {
  return (
    <div>
      <h3>Lista korisnika ({users.length})</h3>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.firstName} ({u.age}){" "}
            <button onClick={() => removeUser(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
