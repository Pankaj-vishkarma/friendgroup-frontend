import '../CSS/image.css'
function Videocard({src})
{
    return(
        <>
          <div className="videocard">
            <video src={src} controls width={300} height={400}></video>
          </div>
        </>
    )
}

export default Videocard