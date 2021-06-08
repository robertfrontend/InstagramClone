import React, { createContext } from 'react'
import  { useState } from 'react'


export const DataContext = createContext();


export const DataProvider = ({ children }) => {

    const [recargar, setRecargar] = useState(false)

    return (
        <DataContext.Provider value={{
            recargar, setRecargar
        }}
        >
            { children }
        </DataContext.Provider>
    )
}