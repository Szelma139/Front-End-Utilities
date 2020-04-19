import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, login, logout, textChange} from './actions'


import './App.css';

function App() {

    const counter = useSelector(state => state.counter);
    const isLogger = useSelector(state => state.logged)
    const text = useSelector(state => state.simpleText)
    const dispatch = useDispatch();

    const [myText, setMyText]=useState('');


    const onHandleChange =(e)=>{
        dispatch(textChange(e.target.value));
        console.log(text)
    }
    return ( 
        <div className = "App" >
          
                <h1>Counter{counter}</h1>
                <p>{counter}</p>
                <p>Logger {isLogger.toString()}</p>
                <button onClick={()=> dispatch(login())}>login</button>
                <button onClick={()=> dispatch(logout())}>logout</button>
                <button onClick={()=> dispatch(textChange('dsds'))}>Text test</button>
                <input value="" onChange={onHandleChange}/>
            <button onClick={()=> dispatch(increment(5))}>+1</button>
            <button onClick={()=> dispatch(decrement())}>-1</button>
{text2}
        </div >
    );
}

export default App;