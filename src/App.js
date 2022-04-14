import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from './views/Home';
import RacerTable from './views/RacerTable';
import Register from './views/Register';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name: null
        }
    }


    handleButtonClick = (step) => {
        let newCount = this.state.count + step;
        this.setState({
            count: newCount
        })
    }

    handleNameChange = (name) => {
        this.setState({name})
    }

    render(){

        return (
            <>
                <Nav />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home 
                                                    handleClick={this.handleButtonClick} 
                                                    count={this.state.count} 
                                                    name={this.state.name}
                                                    handleNameChange={this.handleNameChange}
                                                />} />
                        <Route path='racers' element={<RacerTable />} />
                        <Route path='register' element={<Register />} />
                    </Routes>
                </div>
            </>
        )
    }
}
