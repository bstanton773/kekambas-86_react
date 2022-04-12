import React, { Component } from 'react'
import RacerRow from '../components/RacerRow'

export default class RacerTable extends Component {
    render() {
        return (
            <>
                <h1 className='text-center mt-5'>Driver Standings</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fist</th>
                            <th>Last</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Nationality</th>
                            <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.racers.map((racer, idx) => <RacerRow racer={racer} key={idx} />)}
                    </tbody>
                </table>
            </>
        )
    }
}
