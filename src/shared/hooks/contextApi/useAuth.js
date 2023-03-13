import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { UserReducer } from "shared/state/userState/userReducer";
import { initialState } from './../../state/userState/userReducer';
import { FETCH_USER_SUCCESS } from './../../state/userState/actionTypes';

const USER_CONTEXT = createContext()

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnRAZ21haWwuY29tIiwicm9sZSI6InN0dWRlbnQiLCJpZCI6IjYzOWE1MTg0M2ZkMmRlOTlmZDlhODc5OSIsImlhdCI6MTY3ODY2MjM1NiwiZXhwIjoxNjc4NzQ4NzU2fQ.vXPAm3nPOKhTBHG2z3J0JSsWEFIXg9dWcb46FzGEDS4'

    useEffect(() => {
        //   ${ process.env.REACT_APP_SERVER_URL }
        fetch(`http://localhost:5000/api/v1/user/getme`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                dispatch({ type: FETCH_USER_SUCCESS, payload: res.result })
                    (console.log(res))
            })
    }, [])
    const value = {
        state, dispatch
    }

    return (
        <USER_CONTEXT.Provider value={value} >
            {children}
        </USER_CONTEXT.Provider>
    )
}
export const useAuth = () => {
    const context = useContext(USER_CONTEXT)
    return context;
}

export default UserProvider;