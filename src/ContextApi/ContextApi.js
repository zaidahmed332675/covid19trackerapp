import React,{createContext,useReducer} from 'react';
import {StateReducer} from '../Reducer/StateReducer'

// CREATING INITIAL STATE
const initialState = {name: "Global", iso2: "GL", iso3: "GLO"};

// CREATING CONTEXT
export const GlobalStateContext = createContext(initialState);

// CREATING PROVIDER
export const ContextProvider = ({children}) => {

    // USING REDUCER WITH CONTEXT-API
    let [state,dispatch] = useReducer(StateReducer,initialState);

    function updateGlobalState(obj){

        dispatch(
            {
                type:"UPDATE_STATE",
                payload:{
                    name:obj.name,
                    iso2:obj.iso2,
                    iso3:obj.iso3
                }
            }
        );
    }

    return (
        <GlobalStateContext.Provider value={{
                globalState:state,
                updateGlobalState
            }}>
            {children}
        </GlobalStateContext.Provider>
    )

}