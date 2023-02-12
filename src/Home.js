import React from 'react';
import { useGlobleContext } from './context';

const Home = () => {

    const name = useGlobleContext();

    return(
        <>
            <h1>My Home Page</h1>
            <p>{name}</p>
        </>
    )
}

export default Home;