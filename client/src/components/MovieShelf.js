import React from 'react'
import TriviaForm from './TriviaForm'




function MovieShelf({closeShelf, selectedCard,factsArray, isPosted, setIsPosted}) {
//    console.log(selectedCard)
    
   const mapTrivia = factsArray.map((factsObj) => {
    // console.log(factsObj)
        return <div key={factsObj.id} className="trivia-list">
           <li>
            {factsObj.fact}</li>
            </div>
    })

     
    


    return(
    <div className="shelf-container">
     <div className="close-shelf" onClick={() => closeShelf()}> X </div>
        <div className="shelf">
                <img className="shelf-image" src={selectedCard.image}/>
           <div className="shelf-trivia">
                <div>
                    <div className="shelf-top"> {selectedCard.location} </div>  
                </div>
            <div>
            <div className="test">
                    {mapTrivia}
                 </div> 
                 <div className="form-section"  >
         
                    <TriviaForm isPosted={isPosted} setIsPosted={setIsPosted} selectedCard={selectedCard}/>
                 </div> 
            </div>     
                
           </div> 
        </div>
    </div>
    )  
}

export default MovieShelf