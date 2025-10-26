import React from 'react';
import './UserForm.css';

export default function UserForm() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        age: "",
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted:", formData)
    }
  return (
    <div className='userForm'>UserForm
        <form onsubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />  
            <br />
            <label htmlFor="age">Age</label>
            <input 
                type="number" 
                placeholder="Age" 
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
        <h3>name : {formData.firstName} - age : {formData.age}</h3>
    </div>
  )
}
