import { Link } from "react-router-dom"
import '../CSS/signin.css'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signin(){

    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const [confirmpassword,setconfirmpassword]=useState()
    const navigate=useNavigate()

    const hanldesubmit=async(e)=>{
       e.preventDefault()
       try{
         const res=await axios({
            method:'post',
            url:['http://localhost:1234/api/signin'],
            withCredentials:true,
            data:{name,email,password,confirmpassword}
        })

        if(res.data.success){
          alert('successfully signin')
          navigate('/signup')
        }
       }catch(e){
         alert('error in signin page')
         console.log(e)
       }
      }

    return (
        <div className="signin-box">
        <form onSubmit={hanldesubmit}>
            <div>
                Name : <input type="text" name="name" onChange={(e)=>setname(e.target.value)}/>
            </div>
            <br />
            <div>
                Email : <input type="email" name="email" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <br />
            <div>
                Password : <input type="text" name="password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <br />
            <div>
                Confirm Password : <input type="text" name="confirmpassword" onChange={(e)=>setconfirmpassword(e.target.value)}/>
            </div>
            <br />
            <div>
               <button>submit</button>
            </div>
            <br />
            <Link to='/signup'>Already Registered ?</Link>
        </form>
        </div>
    )
}

export default Signin