import React from 'react'
import TriviaForm from './TriviaForm'




function MovieShelf({closeShelf, selectedCard,factsArray}) {
   console.log(selectedCard)
    
   const mapTrivia = factsArray.map((factsObj) => {
    console.log(factsObj)
        return <div className="trivia-list">
           <li>
            {factsObj.fact}</li>
            </div>
    })

    
    console.log(mapTrivia)


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
                    add Trivia 
                    <TriviaForm/>
                 </div> 
            </div>     
                
           </div> 
        </div>
    </div>
    )  
}

export default MovieShelf