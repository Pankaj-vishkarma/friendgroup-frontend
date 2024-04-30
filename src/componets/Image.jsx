import axios from "axios"
import { useEffect, useState } from "react"
import '../CSS/image.css'
import Imagecard from "./Imagecard"
function Image(){
    const [data,setdata]=useState({})

    useEffect(()=>{
          fun()
    },[])

    const fun=async()=>{
       try{
           const res=await axios({
             method:'get',
             url:['http://localhost:1234/api/getData'],
             withCredentials:true
           })

           if(res.data.success)
           {
            setdata(res.data.data)
            console.log(res.data.data)
           }
       }catch(e){
        console.log(e)
       }
    }

    return(
        <div className="image-box">
        {
            data.images && data.images.map((e)=>(
               <div key={e.id}>
                  <Imagecard src={e?.image?.secure_url}/>
               </div>
            ))
        }
        </div>
    )
}

export default Image