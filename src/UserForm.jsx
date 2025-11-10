import React, {useState, useEffect} from 'react';
import './UserForm.css';
import UserList from './UserList';

export default function UserForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        age: "",
    })
    
    const [users, setUsers] = useState([
        { id: 1, firstName: "Alice", age: 25 },
    ])


  // 🔹 Učitaj korisnike iz localStorage kad se komponenta pokrene
     useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers) {
      setUsers(savedUsers);
    }
  }, []); // ← samo jednom, pri pokretanju

  // 🔹 Čuvaj korisnike svaki put kad se promeni lista
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]); // ← reaguje kad se users promeni

    function handleSubmit(event) {
            event.preventDefault()
         if (!formData.firstName.trim() || !formData.age.trim()) {
        alert("Please fill in both fields!");
        return;
        }

        setUsers([...users, {
            id: users.length + 1,
            firstName: formData.firstName,
            age: formData.age,
        }]);
        console.log("Form submitted:", formData)
        setFormData({ firstName: "", age: "" });
    }
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }
  return (
    <div className='userForm'>UserForm
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
            />  
            <br />
            <label htmlFor="age">Age</label>
            <input 
                type="number" 
                placeholder="Age" 
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                required
            />
            <br />
            <button type="submit">Submit</button>
        </form>
        <h3>name : {formData.firstName} - age : {formData.age}</h3>
        
        <UserList users={users} deleteUser={deleteUser}/>
    </div>  
  )
}
