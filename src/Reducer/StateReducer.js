export const StateReducer = (state,action) => {
    switch(action.type){
        case "UPDATE_STATE":{
            return action.payload;
        }
        default:
            return state;
    }
}