import React, {useState, useEffect } from 'react'
import MovieContainer from './MovieContainer.js'
import MovieForm from './MovieForm.js'
import MovieShelf from './MovieShelf.js'



function Movies() {
    const [movCards, setmovCards]= useState([])
    const [isPosted, setIsPosted] = useState(false) 
    const [shelfOpen, setShelfOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    const [factsArray, setfactsArray] = useState([])

    const [formOpen, setFormOpen] = useState(false)
    const [moviePost, setMoviePost] = useState(false)

    const [isDeleted, setIsDeleted] = useState(false)




    useEffect(() => {
        fetch('/movies')
          .then(res=> res.json())
          .then((movCards)=>setmovCards(movCards))
      },[moviePost, isDeleted])
       
      function selectedForm(){
        setFormOpen(true)
      }

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
      
      function closeMovieForm(){

        setFormOpen(false);
      }

     

  return (
    <>
    <div className="page">
    <button className='Movie-Form' onClick={selectedForm}>🎥</button>
        <MovieContainer movCards={movCards} selectedMovie={selectedMovie} setmovCards={setmovCards} isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
        {/* <button className='Movie-Form' onClick={selectedForm}>🎥</button> */}
        {formOpen && <MovieForm moviePost = {moviePost} setMoviePost={setMoviePost} closeMovieForm={closeMovieForm}/>}
        {shelfOpen && <MovieShelf closeShelf={closeShelf} selectedCard={selectedCard} factsArray={factsArray} isPosted={isPosted} setIsPosted={setIsPosted}/>}
    </div>
   </>
  )



}

export default Movies;