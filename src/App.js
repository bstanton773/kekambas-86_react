import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Nav from "./components/Nav";
import Blog from './views/Blog';
import Home from './views/Home';
import Login from './views/Login';
import RacerTable from './views/RacerTable';
import Register from './views/Register';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name: null,
            message: null,
            category: null,
            loggedIn: localStorage.getItem('token') ? true : false
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

    login = () => {
        this.setState({loggedIn: true})
    }

    logout = () => {
        localStorage.removeItem('token');
        this.flashMessage('You have successfully logged out', 'secondary');
        this.setState({
            loggedIn: false
        })
    }

    render(){

        return (
            <>
                <Nav loggedIn={this.state.loggedIn} logUserOut={this.logout} />
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
                        <Route path='login' element={<Login flashMessage={this.flashMessage} login={this.login}/>} />
                        <Route path='blog' element={<Blog loggedIn={this.state.loggedIn} />} />
                    </Routes>
                </div>
            </>
        )
    }
}
