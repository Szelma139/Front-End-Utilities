
const initialState = {text2:''}
const textChangeReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'TEXTCHANGE':
            return {...state,text2:action.payload.text}
        default:
            return state
    
    }
}

export default textChangeReducer;