import React from 'react';
import Button from './components/Button';
import Nav from "./components/Nav";


function App(){
    return (
        <>
            <Nav />
            <div className='container'>
                <h1>Hello World!</h1>
                <Button step={1} />
                <Button step={10} />
                <Button step={100} />
                <Button step={1000} />

            </div>
        </>
    )
}

export default App;