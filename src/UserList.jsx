import React from 'react'

export default function UserList({users, deleteUser}) {
  return (
    <div>UserList
        {users.map(user => (<div key={user.id}>
            <div className='user' style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
              <h4>{user.firstName} - {user.age} </h4> 
              <span style={{color:"red", fontSize:"2em", background:"grey"}}
                onClick={deleteUser(user.id)}>X</span>
            </div>
    </div>))}
    </div>
  )
}
