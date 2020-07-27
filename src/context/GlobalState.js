import React, { useReducer, createContext} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    data: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
        //actions
        function addData(geojson) {
            dispatch({
                type: 'UPDATE_DATA',
                payload: geojson
            })
        }
    return(<GlobalContext.Provider value={{
            data: state.data,
            addData
        }}>
        { children }
    </GlobalContext.Provider>)
}