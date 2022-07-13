import React from 'react'



function MovieCards({movCards, selectedMovie}) {
    const {image, name, strain_id} = movCards



  return (
    // <ul className="card">
    //   <div className="image">
    //     <img src={image} alt={author} />
    //   </div>
    //   <div className="details">
        
    //     <strong>{name}</strong>
    //     <span> · {name}</span>
    //   </div>
    // </ul>

    <div className="post-container" onClick={(e) => {
      selectedMovie(movCards)
    }}>
      <div className="post">
        <a href="#" style={{backgroundImage: `url(${image})`}} className="post-image"></a>
        <div className="post-overlay">

          <span>{name}</span>
          <span>{strain_id}</span>
          </div>
      </div>
    </div>
    
  )
}

export default MovieCards