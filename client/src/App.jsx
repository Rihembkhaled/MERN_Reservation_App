import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import { useEffect, useState } from 'react';
import Logout from './components/Logout';
import axios from 'axios';
import AddInst from './components/AddInst';
import Insts from './components/Insts';
import EditInst from './components/EditInst';
import DeleteInst from './components/DeleteInst';
import InstDetails from './components/InstDetails';  // Import the new component
import Rent from './components/Rent';

function App() {
  const [role, setRole] = useState('');

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3002/auth/verify')
      .then(res => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole('');
        }
        console.log(res);
      }).catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/insts' element={<Insts role={role} />} />
        <Route path='/login' element={<Login setRoleVar={setRole} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addStudent' element={<AddStudent />} />
        <Route path='/logout' element={<Logout setRole={setRole} />} />
        <Route path='/addinst' element={<AddInst />} />
        <Route path='/inst/:id' element={<EditInst />} />
        <Route path='/delete/:id' element={<DeleteInst />} />
        <Route path='/details/:id' element={<InstDetails />} /> 
        <Route path='/rent/:id' element={<Rent/>} /> {/* New route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
