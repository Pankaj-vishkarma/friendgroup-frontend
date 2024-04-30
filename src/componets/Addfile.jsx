import axios from "axios"
import { useState } from "react"
import '../CSS/addfile.css'

function Addfile(){
    const [image,setimage]=useState()
    const [video,setvideo]=useState()
    const formImage=new FormData()
    formImage.append('image',image)
    const formVideo=new FormData()
    formVideo.append('video',video)

    const hanldeimage=async(e)=>{
       e.preventDefault()
       try{
            const res=await axios({
            method:'post',
            url:['http://localhost:1234/api/addImage'],
            withCredentials:true,
            data:formImage
           })

           if(res.data.success){
            alert('successfully addImage')
           }
    
       }catch(e){
        alert('error in addImage')
        console.log(e)
       }
    }

    const handlevideo=async(e)=>{
        e.preventDefault()
        try{
             const res=await axios({
             method:'post',
             url:['http://localhost:1234/api/addVideo'],
             withCredentials:true,
             data:formVideo
            })
 
            if(res.data.success){
             alert('successfully addVideo')
            }
     
        }catch(e){
         alert('error in addVideo')
         console.log(e)
        }
    }

    return(
        <>
        <div className="addfile-box">
            <form className="addimage" onSubmit={hanldeimage}>
                <h1>Add Image</h1>  <input type="file" name="image"  onChange={(e)=>setimage(e.target.files[0])}/>
                <br />
                <button>submit</button>
            </form>
            <form className="addvideo" onSubmit={handlevideo}>
                <h1>Add Video</h1> <input  type="file" name="video"  onChange={(e)=>setvideo(e.target.files[0])}/>
                <br />
                <button >submit</button>
            </form>
        </div>
        </>
    )
}
export default Addfile