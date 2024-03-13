import './Display2.css'
import Image1 from './assets/b5.jfif'
import Image2 from './assets/b2.jfif'
import Image3 from './assets/b3.jfif'
import Image4 from './assets/b4.jfif'


const Display2 = (props)=>{

    const moviesDisplay = [
        {
            image: Image1,
            description: "SCOTT OWNER AND TRED",
            type: "Drama, Taylor. Movie (2022)", 
        },

        {
            image: Image2,
            description: "JOE DIRTY",
            type: "Loser . Comedy, Drama . Movie (2023)",
        },

        {
            image: Image3,
            description: "OLOROGUN",
            type: "Documentary Movie (2024)",
        },

        {
            image: Image4,
            description: "THE SYSTEM",
            type: "R • Action, Crime • Movie (2022)"
            
        

        }

        
    ]

    return(
        <>
           <div className='display-movies2'>
                
                <h4>POPULAR</h4>

                <div className='movie-card2'>
                    {moviesDisplay.map ((list) =>(
                        <div className='show-card2'>
                            <img src = {list.image} />
                            <h5>{list.description}</h5>
                            <p>{list.type}</p>

                        </div>

                    ))}

                </div >
            
            </div>   
        
        
        </>
    )

}

export default Display2