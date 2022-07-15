import React, {useState, useEffect } from 'react'
import MovieContainer from './MovieContainer.js'
import MovieForm from './MovieForm.js'
import MovieShelf from './MovieShelf.js'



function Movies() {
    const [movCards, setMovCards]= useState([])
    const [isPosted, setIsPosted] = useState(false) 
    const [shelfOpen, setShelfOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    const [factsArray, setFactsArray] = useState([])

    const [formOpen, setFormOpen] = useState(false)
    const [moviePost, setMoviePost] = useState(false)

    const [isDeleted, setIsDeleted] = useState(false)




    useEffect(() => {
        fetch('/movies')
          .then(res=> res.json())
          .then((movCards)=> setMovCards(movCards))
      },[moviePost, isDeleted])
       
      function selectedForm(){
        setFormOpen(true)
      }

      function selectedMovie(movCards){
       setSelectedCard(movCards)
       if(movCards.facts){
        setFactsArray(movCards.facts)
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

      function handleUpdateMovie(updatedMovie) {
        const updatedMovies = movCards.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie);
        setMovCards(updatedMovies);
      }
  console.log(movCards)

     

  return (
    <>
    <div className="page">
    <button className='movie-form-button' onClick={selectedForm}>🎥🎥🎥🎥🎥🎥  Visited A New Film Location?  🎥🎥🎥🎥🎥🎥</button>
    {formOpen && <MovieForm moviePost = {moviePost} setMoviePost={setMoviePost} closeMovieForm={closeMovieForm}/>}
        <MovieContainer movCards={movCards} selectedMovie={selectedMovie} setMovCards={setMovCards} isDeleted={isDeleted} setIsDeleted={setIsDeleted} handleUpdateMovie={handleUpdateMovie}/>
        {/* <button className='Movie-Form' onClick={selectedForm}>🎥</button> */}
     
        {shelfOpen && <MovieShelf closeShelf={closeShelf} selectedCard={selectedCard} factsArray={factsArray} isPosted={isPosted} setIsPosted={setIsPosted}/>}
    </div>
   </>
  )



}

export default Movies;