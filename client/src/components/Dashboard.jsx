import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const [students, setStudents] = useState(0)
    const [admin, setAdmin] = useState(0)
    const [insts, setInsts] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:3002/dashboard')
        .then(res => {
            if (res.data.ok) {
                setStudents(res.data.student)
                setAdmin(res.data.admin)
                setInsts(res.data.inst)

            }

        }).catch(err => console.log(err))

    }, [])


  return (
    <div className='dashboard'>
      <div className='dashboard-box'>
        <h2>Total Instruments</h2>
        <h2>{insts}</h2>
      </div>

      <div className='dashboard'>
        <div className='dashboard-box'>
          <h2>Total Students</h2>
          <h2>{students}</h2>
        </div>

        <div className='dashboard'>
          <div className='dashboard-box'>
            <h2>Total Admins</h2>
            <h2>{admin}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
