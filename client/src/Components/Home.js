import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import "../Styles/Home.css"
import { Link } from 'react-router-dom';

function Home() {

  const [data, setData]=useState([]);

  useEffect( ()=> {

  getUsers();
  
  },[])


  const getUsers= async () => {
    const response =await axios.get("http://localhost:5004/users")
    setData(response.data)

  }

  console.log("data", data)

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete the user"))
    {
      const response=await axios.delete(`http://localhost:5004/user/${id}`)
      if(response.status===200) {
        getUsers()
      }
    }
  }
  return (
    <div style= {{marginTop:"150px"}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style= {{textAlign:"center"}}>No</th>
            <th style= {{textAlign:"center"}}>FullName</th>
            <th style= {{textAlign:"center"}}>Email</th>
            <th style= {{textAlign:"center"}}>Phone</th>
            <th style= {{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item,index)=>{
            return(
              <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to= {`/update/${item.id}`}>
                    <button className="btn btn-edit">
                      Edit
                    </button>
                  </Link>
                  <button className="btn btn-delete" onClick= {()=>onDeleteUser(item.id)} >Delete</button>
                  <Link to= {`/view/${item.id}`}>
                    <button className="btn btn-view">
                      View
                    </button>
                  </Link>
                </td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
    
    </div>
  )
}

export default Home