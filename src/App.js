import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Nav from "./components/Nav";
import Home from './views/Home';
import RacerTable from './views/RacerTable';
import Register from './views/Register';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name: null,
            message: null,
            category: null
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

    flashMessage = (message, category) => {
        this.setState({message,category})
    }

    render(){

        return (
            <>
                <Nav />
                <div className='container'>
                    {this.state.message ? <AlertMessage category={this.state.category} message={this.state.message} flashMessage={this.flashMessage}/> : null}
                    <Routes>
                        <Route path='/' element={<Home 
                                                    handleClick={this.handleButtonClick} 
                                                    count={this.state.count} 
                                                    name={this.state.name}
                                                    handleNameChange={this.handleNameChange}
                                                />} />
                        <Route path='racers' element={<RacerTable />} />
                        <Route path='register' element={<Register flashMessage={this.flashMessage} />} />
                    </Routes>
                </div>
            </>
        )
    }
}
