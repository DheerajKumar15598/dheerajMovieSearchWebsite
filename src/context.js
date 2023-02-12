import React, { useContext, useEffect } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=62d97938&s=titanic`

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const getMovies = async (url) => {
        try{
            const res = await fetch(url)
            const data = await res.json();
            console.log(data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getMovies(API_URL)
    })

    return <AppContext.Provider value="Dheeraj">
        {children}
    </AppContext.Provider>
}

const useGlobleContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobleContext}