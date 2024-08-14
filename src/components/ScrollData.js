import React, { createContext, useContext, useState } from 'react';

const MyDataContext = createContext();

export const MyDataProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <MyDataContext.Provider value={{ data, setData }}>
            {children}
        </MyDataContext.Provider>
    );
};

export const useMyData = () => {
    return useContext(MyDataContext);
};