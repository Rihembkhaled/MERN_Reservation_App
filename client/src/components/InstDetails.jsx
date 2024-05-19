import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/InstDetails.css';

const InstDetails = () => {
  const [instData, setInstData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3002/inst/inst/${id}`)
      .then(res => {
        setInstData(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleEditClick = () => {
    navigate(`/edit-inst/${id}`);
  };

  const handleRentClick = () => {
    navigate(`/rent/${id}`);
  };

  if (!instData) return <div>Loading...</div>;

  return (
    <div className="inst-details-container">
      <h2>Instruments Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Instrument Name:</td>
            <td>{instData.name}</td>
          </tr>
          <hr />
          <tr>
            <td>Price per day:</td>
            <td>{instData.price}</td>
          </tr>
          <hr />
          <tr>
            <td>Description:</td>
            <td>{instData.description}</td>
          </tr>
          <hr />
          <tr>
            <td>Image:</td>
            <td className="image-container">
              <img src={instData.imageUrl} alt={instData.name} className="medium-image" />
              <div className="coordinates">{instData.coordinates}</div>
            </td>
          </tr>
        </tbody>
      </table>
    
      <button className="blue-button" onClick={handleRentClick}>Rent</button>
    </div>
  );
};

export default InstDetails;
