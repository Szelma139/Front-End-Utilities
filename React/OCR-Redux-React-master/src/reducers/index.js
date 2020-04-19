import counterReducer from './counter';
import loggedReducer from './isLogged';
import textChangeReducer from './textChangeReducer';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter:counterReducer, //gdy jest jak po lewej to jest nazwa ktora pozniej trzeba uzyc w komponencie np const counter = useSelector(state => state.counter)
    logged:loggedReducer,        //analogicznie gdy samo {loggerReducer} to wtedy uzywa sie tego loggedReducer
    simpleText:textChangeReducer
})


export default allReducers;