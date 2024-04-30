import axios from "axios"
import { useEffect, useState } from "react"
import '../CSS/home.css'
import Imagecard from "./Imagecard"

function Home(){

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
        <div className="home-box">
        <div className="image-box-home">
        {
            data.images && data.images.map((e)=>(
               <div key={e.id}>
                   <Imagecard src={e?.image?.secure_url}/>
               </div>
            ))
        }
        </div>
        <div className="video-box-home">
        {
            data.videos && data.videos.map((e)=>(
                <div key={e.id}>
                  <video src={e?.video?.secure_url} controls width={250} height={300}></video>
                </div>
            ))
        }
        </div>
        </div>
    )
}

export default Home