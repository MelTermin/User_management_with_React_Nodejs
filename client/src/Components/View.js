import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'

function View() {
  const [userDetail,setUserDetail]=useState([]);
  const {id}=useParams();
  

  useEffect(() => {
    if(id) {
      getSingleUser(id);
    }

  },[id])

  const getSingleUser= async(id) => {
    console.log("id",id)
    axios.get(`http://localhost:5004/user/${id}`)
  .then((response) => {
    console.log(response.data);
    setUserDetail(response.data)
    
  })
   
  }

  console.log(userDetail)
  return (
    <div>
    <h1>View of a User</h1>
    {
        userDetail.map((item) => {
          return (//dont forget to return it Melissa!!//
          <div  key= {item.id} className="results">
            <p>ID :{item.id}</p>
            <p>Fullname{item.fullname}</p>
            <p>EMAIL: {item.email}</p>
            <p>PHONE: {item.phone}</p>
          
          </div>)
        })
      }
      
    
    </div>
  )
}

export default View
