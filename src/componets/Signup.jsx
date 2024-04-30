import { Link } from "react-router-dom"
import '../CSS/signin.css'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import UserContext from "../contex/UserContext"

function Signup(){

    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate=useNavigate()
    const {state,setstate,role,setrole}=useContext(UserContext)

    const handlesubmit=async(e)=>{
       e.preventDefault()
       try{
         const res=await axios({
            method:'post',
            url:['http://localhost:1234/api/signup'],
            withCredentials:true,
            data:{email,password}
            })
        if(res.data.success){
          alert('successfully signup')
          setstate(true)
          if(res.data.data.role==='ADMIN'){
            setrole(res.data.data.role)
          }
          console.log(res.data.data.role)
          navigate('/')
        }

       }catch(e){
        alert('error in signup page')
        console.log(e)
       }
       
    }

    return(
        <div className="signin-box">
        <form onSubmit={handlesubmit}>
            <div>
                Email : <input type="text" name="email" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <br />
            <div>
                Password : <input type="text" name="password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <br />
            <div>
                <button>submit</button>
            </div>
            <br />
            <Link to='/signin'>New User?</Link>
        </form>
        </div>
    )
}

export default Signup