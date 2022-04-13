import React, { useState, useEffect } from 'react'
import RacerRow from '../components/RacerRow';
import RacerForm from '../components/RacerForm';

export default function RacerTable(props){
    const [racers, setRacers] = useState([]);
    const [season, setSeason] = useState(2021);
    const [round, setRound] = useState(1)

    useEffect(() => {
        console.log("Use Effect")
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racers)
            })
    }, [season, round])

    const handleForm = (e) => {
        e.preventDefault();
        const newSeason = e.target.season.value;
        const newRound = e.target.round.value;
        setSeason(newSeason);
        setRound(newRound);
    }


    return (
        <>
            <h1 className='text-center mt-5'>Driver Standings</h1>
            <RacerForm handleForm={handleForm}/>
            <h4 className='text-center my-2'>Season: {season} Round: {round}</h4>
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
                    {racers.map((racer, idx) => <RacerRow racer={racer} key={idx} />)}
                </tbody>
            </table>
        </>
    )
}
// export default class RacerTable extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             racers: []
//         }
//     }

//     componentDidMount(){
//         fetch('https://ergast.com/api/f1/2010/10/driverStandings.json')
//             .then(res => res.json())
//             .then(data => {
//                 let racers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
//                 this.setState({racers})
//             })
//     }

//     render() {
//         return (
//             <>
//                 <h1 className='text-center mt-5'>Driver Standings</h1>
//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Fist</th>
//                             <th>Last</th>
//                             <th>Points</th>
//                             <th>Wins</th>
//                             <th>Nationality</th>
//                             <th>Constructor</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.racers.map((racer, idx) => <RacerRow racer={racer} key={idx} />)}
//                     </tbody>
//                 </table>
//             </>
//         )
//     }
// }
