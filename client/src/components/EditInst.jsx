

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  {useNavigate, useParams} from 'react-router-dom'

const EditInst = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageURl] = useState('')
    const navigate = useNavigate()
    const {id} = useParams() 
    useEffect(() => {

        axios.get('http://localhost:3002/inst/inst/'+id)
        .then(res => { 
            setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setImageURl(res.data.imageUrl)
            
            
            
        })
        .catch(err => console.log(err))

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3002/inst/inst/'+id, {name, price, description, imageUrl})
        .then(res => { 
            
            if (res.data.updated){
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
        <h2>Edit Instrument</h2>
        <div className="form-group">
          <label htmlFor="inst">Instrument Name::</label>
          <input type="text" id="inst" name="inst" value= {name}
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price per day:</label>
          <input type="text" id="price" name="price" value= {price}
          onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={description}
          onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL :</label>
          <input type="text" id="image" name="image" value={imageUrl}
          onChange={(e) => setImageURl(e.target.value)}/>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}



export default EditInst