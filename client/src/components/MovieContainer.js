import React from 'react'
import MovieCards from './MovieCards.js'
import {BrowserRouter as useNavigate} from 'react-router-dom';


function MovieContainer({movCards, selectedMovie}) {

  // const navigate = useNavigate();


   const mapMovCards = movCards.map((cardsObj) => {
       return <MovieCards 
       key ={cardsObj.id} 
       movCards={cardsObj}
       selectedMovie={selectedMovie} />
   })

  return (
    <div className="content-container">
        <div className="content" >{mapMovCards} </div>
    </div>
  )
}

export default MovieContainer