import './App.css';
import Advice from './components/Advice/Advice';
import normalize from 'normalize.css'
import {useState} from 'react'
function App() {

 function fetchMoviesList(){
   fetch('https://api.adviceslip.com/advice')
   .then((response) => {
     return response.json();
   })
   .then((data) => {
    setAdvice(data.slip.advice)
    setAdviceID(data.slip.id)
       });
     
   
      }
      
fetchMoviesList()

  return (
    <div className="App">
      <Advice advice={advice} id={id} action={fetchMoviesList}/>
    </div>
  );
}

export default App;
