import React, {useState} from 'react'
import {useHistory,useParams} from "react-router-dom"
import axios from 'axios';
import "../Styles/AddUser.css"
import { toast } from 'react-toastify';




function AddUser() {
  const [fullname, setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [details,setDetail]=useState("")

  const history=useHistory();
  const {id}=useParams()

 

  const addContact= async() => {
    axios.post("http://localhost:5004/user", {
        fullname,email,phone
      }).then (data=> {
        console.log(data)
        setDetail([...details,data.data])
        if(data.status===200) {
          toast.success("Added succesfully")
        }
      })
       setTimeout (()=>history.push("/"),500);
       setFullName("");
       setEmail("");
       setPhone("")
  }

  const updateUserDetails= async(id) => {
    axios.put(`http://localhost:5004/user/${id}`, {
        fullname,email,phone
      }).then (data=> {
        
        if(data.status===200) {
          toast.success("Updated succesfully")
        }
        setTimeout (()=>history.push("/"),500);
      })
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    if(!id) {
      addContact()
    }else {
      updateUserDetails(id)
    }
   
  }
  

  return (
    <div>
  <form onSubmit= {handleSubmit} >

<label>Full Name:</label>
<input type="text" placeholder="Please type your full name" value= {fullname} name="fullname" onChange={e => setFullName(e.target.value)} ></input>

<label>Email:</label>
<input type="text" placeholder="Please type your email" value= {email} name="email" onChange={e => setEmail(e.target.value)} ></input>

<label>Phone Number:</label>
<input type="number" placeholder="Please type your phone number" value= {phone} name="phone" onChange={e => setPhone(e.target.value)} ></input>



      <input type="submit" value={id ? "UPDATE": "ADD"}></input>
      </form>
      
    </div>
  )
}

export default AddUser
