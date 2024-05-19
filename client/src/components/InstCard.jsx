import React from 'react';
import { Link } from 'react-router-dom';

const InstCard = ({ inst, role }) => {
  const { name, price, description, imageUrl } = inst;

  return (
    <div className='book-card'>
      <img src={imageUrl} alt={name} className='book-image' />
      <div className="book-details">
        <h3>{name}</h3>
        <p>Price per day: {price}dt</p>
        {/*<p>{description}</p>*/}
      </div>
      {role === 'admin' && (
        <div className="book-actions">
          <button><Link to={`/inst/${inst._id}`} className='btn-link'>Edit</Link></button>
          <button><Link to={`/delete/${inst._id}`} className='btn-link'>Delete</Link></button>
        </div>
      )}
      {role === 'student' && (
        <div className="book-actions">
          <button><Link to={`/details/${inst._id}`} className='btn-link'>Details</Link></button>
          <button><Link to={`/rent/${inst._id}`} className='btn-link'>Rent</Link></button>
        </div>
      )}
    </div>
  );
}

export default InstCard;
