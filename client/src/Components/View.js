import React,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'

function View() {
  const [user,setUser]=useState("")
  const {id}=useParams();
  

  useEffect(() => {
    if(id) {
      getSingleUser();
    }

  },[id])

  const getSingleUser= async(id) => {
    console.log("id",id)
    axios.get(`http://localhost:5004/user/${id}`)
  .then((response) => {
    console.log(response.data);
   
  })
   
  }
  return (
    <div>
    <h1>View of a User</h1>
      <p>User ID: {id}</p>
    
    </div>
  )
}

export default View
