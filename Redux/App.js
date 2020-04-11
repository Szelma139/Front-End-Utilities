import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';

import {getLanguage1,getLanguage2,setLanguage1, setLanguage2} from './redux/actions';

import TestComponent from './TestComponent';


function App() {

const language1 = useSelector(state =>state.lang1);
const language2 = useSelector(state=>state.lang2);
const dispatch = useDispatch();

  return (
    <div className="App">

<h1>Aplikacja dziala</h1>

<button onClick={()=> dispatch(setLanguage2("polish"))}>Zmien 1</button>
<button onClick={()=> dispatch(setLanguage1("english"))}>Zmien 1</button>

<p>{language1}</p>    
<p>{language2}</p>    

<span>
  <TestComponent/>
</span>
    </div>
  );
}

export default App;
