import { Link } from "react-router-dom"
import '../CSS/header.css'
import { useContext } from "react"
import UserContext from "../contex/UserContext"


function Header(){

  const {state,setstate,role,setrole}=useContext(UserContext)

 if(state && role){
  return(
    <div className="box">
       
       <div className="label">
           <h1>Friend Group.com</h1>
        </div>
      <div className="link-box">
        <div >
        <Link className="link" to=''>Home</Link>
        </div>
        <div>
        <Link className="link" to='/image'>Image</Link>
        </div>
        <div>
        <Link className="link" to='/video'>Video</Link>
        </div>
         <div>
          <Link className="link" to='/addfile'>AddFile</Link>
         </div>
          <div>
          <Link className="link" to='/logout'>logout</Link>
          </div>
      </div>
   
    </div>
)
 }else if(state) {
  return(
    <div className="box">
       
       <div className="label">
           <h1>Friend Group.com</h1>
        </div>
      <div className="link-box">
        <div >
        <Link className="link" to=''>Home</Link>
        </div>
        <div>
        <Link className="link" to='/image'>Image</Link>
        </div>
        <div>
        <Link className="link" to='/video'>Video</Link>
        </div>
          <div>
            <Link className="link" to='/logout'>Logout</Link>
          </div>
        
      </div>
   
    </div>
)
 }else{
  return(
    <div className="box">
       
       <div className="label">
           <h1>Friend Group.com</h1>
        </div>
      <div className="link-box">
        <div >
        <Link className="link" to=''>Home</Link>
        </div>
        <div>
        <Link className="link" to='/image'>Image</Link>
        </div>
        <div>
        <Link className="link" to='/video'>Video</Link>
        </div>
          <div>
            <Link className="link" to='/signin'>Login</Link>
          </div>
        
      </div>
   
    </div>
)
 }
 
}
export default Header