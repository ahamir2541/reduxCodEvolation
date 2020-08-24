import React, {createContext, useReducer} from 'react';
import { firebaseAuth } from '../Reducer/authReducer'

export const Auth = createContext()

const initialState = {
    user : {}
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(firebaseAuth, initialState)
    const value = {state, dispatch}

    return (
        <Auth.Provider value={value} >
            {children}
        </Auth.Provider>
    )
}

