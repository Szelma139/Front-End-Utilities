import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {getLanguage1,getLanguage2,setLanguage1, setLanguage2} from './redux/actions';


function TestComponent() {


const dispatch = useDispatch();

  return (
    <div className="App">

<h1>Aplikacja dziala</h1>

<button onClick={()=> dispatch(setLanguage1("french"))}>Zmien 1</button>
<button onClick={()=> dispatch(setLanguage2("jokasta"))}>Zmien 2</button>
 
    </div>
  );
}

export default TestComponent;
