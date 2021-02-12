import React, { useReducer } from 'react'

import { UPDATE_SCREEN } from "../types"
import ScreenContext from "./screen-context"
import screenReduser from "./screen-reducer"

const initialState = {
    id: null
}

const ScreenState = ({ children }) => {

    const [state, dispatch] = useReducer(screenReduser, initialState)

    const updateScreen = id => dispatch({type: UPDATE_SCREEN, id})
    
    return(
        <ScreenContext.Provider
        value={{
            screen: state.id, 
            updateScreen
        }}>
            { children }
        </ScreenContext.Provider>
    )
}

export default ScreenState