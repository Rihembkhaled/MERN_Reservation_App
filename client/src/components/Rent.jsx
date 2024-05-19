import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Rent = () => {
  const [instrument, setInstrument] = useState('');
  const [rentDate, setRentDate] = useState('');
  const [visa, setVisa] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3002/inst/inst/${id}`)
      .then(res => {
        setInstrument(res.data.name);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3002/inst/rent/${id}`, { instrument, rentDate, visa })
      .then(res => {
        if (res.data.added) {
          navigate('/');
        } else {
          console.log(res);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Rent Instrument</h2>
        <div className="form-group">
          <label htmlFor="instrument">Instrument Name:</label>
          <input type="text" id="instrument" name="instrument" value={instrument} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="date">Rent Date:</label>
          <input type="date" id="date" name="date" min={new Date().toISOString().split('T')[0]}
            value={rentDate} onChange={(e) => setRentDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="visa">Visa Card:</label>
          <input type="text" id="visa" name="visa" placeholder = "Enter votre Carte Bancaire"value={visa}
            onChange={(e) => setVisa(e.target.value)} />
        </div>
        <button type="submit">Rent</button>
      </form>
    </div>
  );
}

export default Rent;
