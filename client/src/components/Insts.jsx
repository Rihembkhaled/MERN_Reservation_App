import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstCard from './InstCard';
import '../css/Inst.css';

const Insts = ({ role }) => {
  const [insts, setInsts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/inst/insts')
      .then(res => {
        setInsts(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='book-list'>
      {insts.map(inst => (
        <InstCard key={inst.id} inst={inst} role={role} />
      ))}
    </div>
  );
}

export default Insts;
