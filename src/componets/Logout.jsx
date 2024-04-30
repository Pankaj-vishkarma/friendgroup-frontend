import { useContext, useEffect } from "react"
import axios from 'axios'
import UserContext from '../contex/UserContext'
import { useNavigate } from "react-router-dom"

function Logout(){

 const navigate=useNavigate()
 const {state,setstate}=useContext(UserContext)

 useEffect(()=>{
  handle()
 },[])

 const handle=async()=>{
  try{
    const res= await axios({
      method:'get',
      url:['http://localhost:1234/api/logout'],
      withCredentials:true
   })
  
   if(res.data.success){
    alert('successfully logout')
    setstate(false)
    navigate('/')
  }
   }catch(e){
     alert('error in logout')
     console.log(e)
   }
 }
 
}

export default Logout