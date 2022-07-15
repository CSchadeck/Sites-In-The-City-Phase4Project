import React, {useState} from 'react'

function UpdateForm({movCards, setMovCards,name, location,  setImage, setName, setLocation, handlePatch, closeUpdate}) {
  


// console.log(handlePatch)

const allKeys = {name, location}

// function updateMovieInfo(){

//     return (allKeys)
   
// }
console.log(allKeys)
  
// onClick={updateMovieInfo}
  
  return (
 
    <div className="form-container">
    <form className="form"  >
    <div className="close-movie-form" onClick={() => closeUpdate()}> X </div>
            <input  type="text" placeholder={name} value={name} onChange= {(e)=> setName(e.target.value) } />
            <input  type="text" value={location} onChange= {(e)=> setLocation(e.target.value) } />
            {/* <input  type="text" value={movCards.image} onChange= {(e)=> setImage(e.target.value) } /> */}
            <button onClick={handlePatch}  >Updated Movie!</button>
    </form>
    </div>

 
  
  )
}
export default UpdateForm;