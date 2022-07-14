import React, {useState} from 'react'



function MovieCards({movCards, selectedMovie,  onDeleteMov, id, isDeleted, setIsDeleted}) {
    const {image, name} = movCards

    

    function handleDelete (){
      fetch(`/movies/${id}`, {
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then(data=>{

          setIsDeleted(!isDeleted)
        })
     }
  return (
    <div>
    <button className="emoji-button delete" onClick={handleDelete}>🗑 </button>
<div>

    <div className="post-container" onClick={(e) => {
      selectedMovie(movCards)
    }}>
      <div className="post">
        <a href="#" style={{backgroundImage: `url(${image})`}} className="post-image"></a>
        <div className="post-overlay">

          <span>{name}</span>
          {/* <button className="emoji-button delete" onClick={handleDelete}>🗑 </button> */}
          </div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default MovieCards