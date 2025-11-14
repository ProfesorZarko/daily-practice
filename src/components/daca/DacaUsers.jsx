import React , {useState} from 'react'
import './DacaUsers.css';

export default function DacaUsers({users, onRemove: removeUser}) {
    const [activeUser, setActiveUser] = useState(null);

  return (
    <div>
      <h3>Lista korisnika ({users.length})</h3>
      <ul>
        {users.map((u, i) => (
          <li key={i}
            className={activeUser === i ? "user active" : "user"}
                onMouseEnter={() => setActiveUser(i)}
                onMouseLeave={() => setActiveUser(null)}>
            {u.firstName} ({u.age}){" "}
            <button onClick={() => removeUser(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
