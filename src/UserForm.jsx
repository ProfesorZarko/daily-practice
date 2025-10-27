import React from 'react';
import './UserForm.css';

export default function UserForm() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        age: "",
    })
    
    const [users, setUsers] = React.useState([
        { id: 1, firstName: "Alice", age: 25 },
    ])

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
        {users.map(user => (<div key={user.id}>
            <h4>{user.firstName} - {user.age}</h4>
        </div>))}
    </div>  
  )
}
