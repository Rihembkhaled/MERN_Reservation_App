import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const DeleteInst = () => {
    const navigate = useNavigate()
    const {id} = useParams()
  useEffect(() => {
    axios.delete('http://localhost:3002/inst/inst/'+id)
    .then(res => {
        if(res.data.deleted) {
            navigate('/insts')
        }
    }).catch(err => console.log(err))
  }, [])
 
}

export default DeleteInst