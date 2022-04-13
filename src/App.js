import React, { Component } from 'react';
import Button from './components/Button';
import Nav from "./components/Nav";
import Kekambas from './views/Kekambas';
import RacerTable from './views/RacerTable';
import { Routes, Route } from 'react-router-dom';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            racers: []
        }
    }

    componentDidMount(){
        console.log('App mounted')
        fetch('https://ergast.com/api/f1/2010/10/driverStandings.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
        const myButtonSteps = [1, 10, 100, 1000, 10000, 100000]
        console.log('App rendered')
        return (
            <>
                <Nav />
                <div className='container'>
                    <h1>Hello World!</h1>
                    <h4 className='text-center'>Current Count: {this.state.count}</h4>
                    <div className='d-flex justify-content-around'>
                        {myButtonSteps.map((step, i) => <Button key={i} step={step} handleClick={this.handleButtonClick} />)}
                    </div>
                    {/* <RacerTable racers={this.state.racers}/> */}
                    <Routes>
                        <Route path='/kekambas' element={<Kekambas />} />
                    </Routes>
                </div>
            </>
        )
    }
}
