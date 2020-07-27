export default (state, action) => {
    switch(action.type){
        case 'UPDATE_DATA':
            return{
                ...state,
                data: action.payload
            }
        default: 
            return state
    }
}