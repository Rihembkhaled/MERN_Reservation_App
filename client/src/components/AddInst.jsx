import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate} from 'react-router-dom'

const AddInst = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageURl] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/inst/add', {name, price, description, imageUrl})
        .then(res => { 
            
            if (res.data.added){
                navigate('/insts')
            } 
            
            else {
                console.log(res)
            }
        })
        .catch(err => console.log(err))
      }

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Instrument</h2>
        <div className="form-group">
          <label htmlFor="inst">Instrument Name:</label>
          <input type="text" id="inst" name="inst" 
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price per/day:</label>
          <input type="text" id="price" name="price" 
          onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" 
          onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL :</label>
          <input type="text" id="image" name="image" 
          onChange={(e) => setImageURl(e.target.value)}/>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddInst