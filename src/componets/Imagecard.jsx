import '../CSS/image.css'

function Imagecard({src}){
    return(
        <>
           <div className="imagecard">
            <img src={src} alt="img" height={400} width={300}/>
           </div>
        </>
    )
}

export default Imagecard