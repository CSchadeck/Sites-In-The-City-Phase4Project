import React, {useState, useEffect } from 'react'
import MovieContainer from './MovieContainer.js'
import MovieShelf from './MovieShelf.js'



function Movies() {
    const [movCards, setmovCards]= useState([])
    const [isPosted, setIsPosted] = useState(false) 
    const [shelfOpen, setShelfOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    const [factsArray, setfactsArray] = useState([])
    useEffect(() => {
        fetch('/movies')
          .then(res=> res.json())
          .then((movCards)=>setmovCards(movCards))
      },[isPosted])
       
      function selectedMovie(movCards){
       setSelectedCard(movCards)
       if(movCards.facts){
        setfactsArray(movCards.facts)
       }
        setShelfOpen(true);
        console.log(selectedCard)
      }
      function closeShelf(){

        setShelfOpen(false);
      }

  return (
    <>
    <div className="page">
        <MovieContainer movCards={movCards} selectedMovie={selectedMovie}/>
        {shelfOpen && <MovieShelf closeShelf={closeShelf} selectedCard={selectedCard} factsArray={factsArray} isPosted={isPosted} setIsPosted={setIsPosted}/>}
    </div>
   </>
  )



}

export default Movies;