import React, { createContext, useReducer } from 'react';
import { AppReducer } from './reducer';

//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }]
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

    /*With the help of the below return statement we will be able to pass the transactions which is 
    part of our state to all our childern components using useContext */
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
} 