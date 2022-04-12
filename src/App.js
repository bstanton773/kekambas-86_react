import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from './views/Home';
import RacerTable from './views/RacerTable';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            racers: []
        }
    }

    componentDidMount(){
        fetch('https://ergast.com/api/f1/2010/10/driverStandings.json')
            .then(res => res.json())
            .then(data => {
                let racers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                this.setState({racers})
            })
    }

    handleButtonClick = (step) => {
        let newCount = this.state.count + step;
        this.setState({
            count: newCount
        })
    }

    render(){

        return (
            <>
                <Nav />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home handleClick={this.handleButtonClick} count={this.state.count} />} />
                        <Route path='racers' element={<RacerTable racers={this.state.racers}/>} />
                    </Routes>
                </div>
            </>
        )
    }
}
