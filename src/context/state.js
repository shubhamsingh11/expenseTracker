import React, { createContext, useReducer } from 'react';
import { AppReducer } from './reducer';

//Initial State
const initialState = {
    transactions: []
};

//Create Global Context using createContext
export const GlobalContext = createContext(initialState);

//Provider Component : To provide access to all our components to our state.
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload : id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload : transaction
        })
    } 

    /*With the help of the below return statement we will be able to pass the transactions which is 
    part of our state to all our childern components using useContext */
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
} 