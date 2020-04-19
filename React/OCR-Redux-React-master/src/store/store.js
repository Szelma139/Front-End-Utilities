import { createStore} from 'redux';
import rotateReducer from '../reducers/rotateReducer';

function configureStore(state = {rotating: true}) //default state rotating to true
{
    return createStore(rotateReducer, state);
}


export default configureStore;