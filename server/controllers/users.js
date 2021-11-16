import {stringify, v4 as uuid} from "uuid"

let users = [ 
  { 
  fullname:"Melissa Termin",
  email:"melissa_termin@hotmail.com",
  phone:12345,
  id:1,
},
{
  fullname:"Selin Termin",
  email:"selin_termin@hotmail.com",
  phone:12345584903,
  id:2,
},  
]

export const getUsers=(req,res) => {
  res.send(users)
}

export const createUser= (req,res) => {
  const user=req.body
  users.push({...user,id:uuid()})
  res.send(users)
}

export const getUser= (req,res) => {
  const singleUser= users.filter((user)=>
  user.id===req.params.id)
  res.send(singleUser)

}

export const deleteUser=(req,res) => {
  users=users.filter((user)=>user.id != req.params.id)
  res.send("user deleted")
}

export const updateUser= (req,res) =>  {
  const user=users.find((user)=>user.id===req.params.id)

  user.fullname=req.body.fullname;
  user.email=req.body.email;
  user.phone=req.body.phone;

  res.send("Updated succesffully")
}