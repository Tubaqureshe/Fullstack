import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import Cookies from "js-cookie";
import axios from "axios";

export const GlobalContext = createContext("Initial Value");
let data = {
    user: undefined,
    token: Cookies.get('token') || undefined
};

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    useEffect(() => {
        Cookies.set('token', state.token)
        fetchUser();
    }, [state.token])

    const fetchUser = async () => {

        if(!state.token)

        console.log({ 
            "Authorization": `Bearer ${state.token}` 
        })
        const { data } = await axios.get('/me', { 
            headers: { 
                "Authorization": `Bearer ${state.token}` 
            }
        });
        console.log(data);
    }

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}