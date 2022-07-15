import React, {useState} from 'react'

function MovieForm({moviePost, setMoviePost, closeMovieForm}) {
  
  const [name, setName] = useState()
  const [image, setImage] = useState('')
  const [location, setLocation] = useState()


  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleLocationChange(e){
    setLocation(e.target.value)
  }
  function addedWork(e){
    e.preventDefault()
   const userWork = { name, image, location}
    fetch('/movies', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userWork)
      
    })
   console.log(userWork)
  }
  return (
 
    <div className="form-container">
         
    <form className="new-poem-form"  onSubmit ={addedWork}>
    <div className="close-movie-form" onClick={() => closeMovieForm()}> X </div>

            <textarea  id="name"  onChange= {handleNameChange} />
            <input placeholder="Location" type="text" onChange= {handleLocationChange} />
            <textarea placeholder="Add image of location here..." type="img" value={image} onChange= {(e)=> setImage(e.target.value)} />
            <input className='close-movie-form' type="submit" value="create new movie" />
    </form>
    </div>

 
  
  )
}
export default MovieForm;