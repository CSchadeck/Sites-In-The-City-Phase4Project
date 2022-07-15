import React, {useState} from 'react'
import UpdateForm from './UpdateForm';



function MovieCards({movCards, selectedMovie,  onDeleteMov, id, isDeleted, setIsDeleted, handleUpdateMovie, setMovCards}) {
    // const {image, name, location} = movCards;
    const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState('')
  const [updateOpen, setUpdate] = useState(false)

    function handlePatch() {
      fetch(`/movies/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: movCards.image, name: movCards.name, location: movCards.location})
      }).then(r => r.json())
          .then((data) => {
              console.log(data);
              
              handleUpdateMovie(data)
          })
  }

  // console.log(setMovCards)

  function closeUpdate(){
setUpdate(false)

  }
  function selectedEdit(){
    setUpdate(true)
  }

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
      <div>{updateOpen && <UpdateForm image={movCards.image} name={movCards.name} location={movCards.location} setImage={setImage} setName={setName} setLocation={setLocation} handlePatch={handlePatch} closeUpdate={closeUpdate} />}</div>
       
<div>

    <div className="post-container" onClick={(e) => {
      selectedMovie(movCards)
    }}>
      <div className="post">
        <a href="#" style={{backgroundImage: `url(${movCards.image})`}} className="post-image"></a>
        <div className="post-overlay">

          <span>{movCards.name}</span>
          {/* <button className="emoji-button delete" onClick={handleDelete}>🗑 </button> */}
          </div>
      </div>
    </div>
    </div>
    <button className="emoji-button-patch" onClick={selectedEdit}>🖊 </button>
    <button className="emoji-button-delete" onClick={handleDelete}>🗑 </button>
    </div>
    
  )

  

}

export default MovieCards