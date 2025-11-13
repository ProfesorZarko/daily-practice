import './App.css'
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Greeting from './Greeting'
import UserForm from './UserForm'
import OdbojkaVezbanje from './pages/OdbojkaVezbanje';
import Daca from './pages/Daca';
import FlexDemo from './pages/FlexDemo';

function App() {
  
  return (
    <Router>
      <nav className='navbar'>
        <Link to="/" style={{ marginRight: '10px' }}>Greeting</Link>
        <Link to="/form">User Form</Link>
        <Link to="/odbojka">Odbojka</Link>
        <Link to="/daca">DACA</Link>
        <Link to="/flexDemo">FlexDemo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/odbojka" element={< OdbojkaVezbanje />}/>
        <Route path="/daca" element={< Daca />}/>
        <Route path="/flexDemo" element={<FlexDemo />}/>
      </Routes>
    </Router>
  )
}


export default App
