import './Display.css'
import Image1 from './assets/a1.jfif'
import Image2 from './assets/a2.jfif'
import Image3 from './assets/a3.jfif'
import Image4 from './assets/a4.jfif'


const Display = (props)=>{

    const moviesDisplay = [
        {
            image: Image1,
            description: "WE HAVE ALWAYS LIVED IN THE CASTLE",
            type: "Drama, Thriller. Movie (2024)", 
        },

        {
            image: Image2,
            description: "NORTH HOLLYWOOD",
            type: "TVMA . Comedy, Drama . Movie (2021)",
        },

        {
            image: Image3,
            description: "JAGUN JAGUN",
            type: "Action Movie (2023)",
        },

        {
            image: Image4,
            description: "WHITE BOY RICK",
            type: "R . Drama, Crime . Movie (2018)" 
        }

        
    ]

    return(
        <>
           <div className='display-movies'>

                <h1>Movies</h1>

                <h4>NEWLY ADDED MOVIES</h4>

                <div className='movie-card'>
                    {moviesDisplay.map ((list) =>(
                        <div className='show-card'>
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

export default Display