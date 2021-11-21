import React from 'react'; 
import './index.css'; 
import Joke from './Joke' 
import jokesData from './jokesData'



function JokeApp() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /> )
   


  return (
    
  <div>
    {jokeComponents}
  </div>
  )
}

export default JokeApp; 
