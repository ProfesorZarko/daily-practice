import React, { useState, useEffect }from 'react'
import '../components/daca/Daca.css';
import DacaUsers from '../components/daca/DacaUsers';

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
            //stejtovi za filter i sortBy 
            const [filter, setFilter] = useState("");
            const [sortBy, setSortBy] = useState("name");

        
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

          // Rendering component
          const filteredUsers = users
            .filter(u => u.firstName.toLowerCase().includes(filter.toLowerCase()))
            .sort((a, b) => {
                if (sortBy === "name") return a.firstName.localeCompare(b.firstName);
                if (sortBy === "age") return a.age - b.age;
                return 0;
                });

        
          return (
            <div className="mainDaca">
                <div className='upperDaca'>
            <div className="userForm">
              <form onSubmit={handleSubmit} style={{ display: "flex"}}>
                <label>First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                  style={{width:"5rem"}}
                />
                <label>Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: e.target.value})}
                  style={{width:"5rem"}}
                />
                <button type="submit">Submit</button>
              </form>
              <DacaUsers users={filteredUsers} onRemove={removeUser} />
              
              <div className="controls">
                <input
                    type="text"
                    placeholder="Pretraži po imenu..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Sortiraj po imenu</option>
                    <option value="age">Sortiraj po godinama</option>
                </select>
                <button onClick={clearUsers}>Obriši sve</button>
            </div>

            </div>
        <div className='upperMiddle'>upperMiddle</div>
        <div className='upperRight'>upperRight</div>
            </div>
            </div>
          );
        }
