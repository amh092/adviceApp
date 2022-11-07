import './App.css';
import Advice from './components/Advice/Advice';

import {useState,useEffect} from 'react'
function App() {

  const [advice, setAdvice] = useState('')
  const [adviceID, setAdviceID] = useState('')
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
useEffect(() => {
fetchMoviesList()
}, [advice])

  return (
    <div className="App">
      <Advice advice={advice} id={adviceID} action={fetchMoviesList}/>
    </div>
  );
}

export default App;
