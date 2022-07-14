import React, {useState} from 'react'

function MovieForm({moviePost, setMoviePost, closeMovieForm}) {
  
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState('')
  function addedWork(e){
    e.preventDefault()
   const userWork = { name, image, location}
    fetch('/movies', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userWork)
      
    })
    .then(setMoviePost(!moviePost))
   console.log(userWork)
  }
  return (
 
    <div className="form-container">
         
    <form className="new-poem-form"  onSubmit ={addedWork}>
    <div className="close-movie-form" onClick={() => closeMovieForm()}> X </div>
            <input placeholder="Name(year)" type="text" id="name" value={name} onChange= {(e)=> setName(e.target.value) } />
            <input placeholder="Location" type="text" value={location} onChange= {(e)=> setLocation(e.target.value) } />
            <textarea placeholder="Add image of location here..." type="img" value={image} onChange= {(e)=> setImage(e.target.value)} />
            <input type="submit" value="create new movie" />
    </form>
    </div>

 
  
  )
}
export default MovieForm;