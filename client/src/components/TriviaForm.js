import React, {useState} from 'react'

function TriviaForm({setIsPosted, isPosted, selectedCard}) {
  
  const [fact, setFact] = useState('')


  
  function addedWork(e){
    e.preventDefault()
//    const fact = {fact}
    fetch('/facts', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({fact, movie_id: selectedCard.id, user_id:1} )
      
    })
    // .then((r) => r.json())
    .then(setIsPosted(!isPosted))
   console.log(fact)
  }

  
  return (
 
    <div className="form-container">
    <form className="form"  onSubmit ={addedWork}>
            <input placeholder="Trivia" type="text" value={fact} onChange= {(e)=> setFact(e.target.value) } />
            <input type="submit" value="Share your Trivia" />
    </form>
    </div>

 
  
  )
}
export default TriviaForm;