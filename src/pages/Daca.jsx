import React, { useState, useEffect }from 'react'

export default function Daca() {
          const [users, setUsers] = useState(() => {
            try {
              const raw = localStorage.getItem("users");
              return raw ? JSON.parse(raw) : [];
            } catch (e) {
              console.error("Error reading users from localStorage", e);
              return [];
            }
          });
        
          const [formData, setFormData] = useState({ firstName: "", age: "" });
        
          // svaki put kad se users promeni - sačuvaj ga u localStorage
          useEffect(() => {
            try {
              localStorage.setItem("users", JSON.stringify(users));
            } catch (e) {
              console.error("Error writing users to localStorage", e);
            }
          }, [users]);
        
          function handleSubmit(e) {
            e.preventDefault();
            if (!formData.firstName.trim() || !formData.age.toString().trim()) {
              alert("Popuni oba polja");
              return;
            }
            const newUser = { ...formData };
            setUsers(prev => [...prev, newUser]);
            setFormData({ firstName: "", age: "" });
          }
        
          function clearUsers() {
            setUsers([]);
            // localStorage.removeItem("users"); // ovaj poziv nije obavezan jer useEffect već snima prazan niz
            localStorage.removeItem("users"); // možeš i eksplicitno
          }
        
          // opcionalno: brisanje pojedinačnog korisnika
          function removeUser(index) {
            setUsers(prev => prev.filter((_, i) => i !== index));
          }
        
          return (
            <div className="userForm">
              <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                />
                <label>Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: e.target.value})}
                />
                <button type="submit">Submit</button>
              </form>
        
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
      <button onClick={clearUsers}>Obriši sve</button>
    </div>
            </div>
          );
        }
