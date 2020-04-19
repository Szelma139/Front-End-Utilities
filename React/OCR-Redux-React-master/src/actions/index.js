export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload:nr
    };
}


export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}



export const login =() => {
    return {
        type: 'LOGIN'
    };
}


export const logout =() => {
    return {
        type: 'LOGOUT'
    };
}

export const textChange =(text)=>{
    return {
        type: 'TEXTCHANGE',
        payload: text 
    
    }
}