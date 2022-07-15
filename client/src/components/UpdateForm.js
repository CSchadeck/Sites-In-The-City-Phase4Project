import React, {useState} from 'react'

function UpdateForm({movCards, setMovCards, nameD, locationD,  setImage, setName, setLocation, handlePatch, closeUpdate, name, location}) {
  


// console.log(handlePatch)

const allKeys = {nameD, locationD}

// function updateMovieInfo(){

//     return (allKeys)
   
// }
console.log(allKeys)

function handleName(e){
    setName(e.target.value)
  }
  
// onClick={updateMovieInfo}
  
  return (
 
    <div className="form-container">
    <form className="form"  >
    <div className="close-movie-form" onClick={() => closeUpdate()}> X </div>
            <input  type="text" value={name} placeholder={nameD}  onChange= {handleName } />
            <input  type="text"  value={location} onChange= {(e)=> setLocation(e.target.value) } />
            {/* <input  type="text" value={movCards.image} onChange= {(e)=> setImage(e.target.value) } /> */}
            <button onClick={()=>handlePatch()}  >Updated Movie!</button>
    </form>
    </div>

 
  
  )
}
export default UpdateForm;