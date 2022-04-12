import React, { Component } from 'react'
import Button from '../components/Button';
import ChangeName from '../components/ChangeName';

export default class Home extends Component {
    render() {
        const myButtonSteps = [1, 10, 100, 1000, 10000, 100000]
        return (
            <>
                {this.props.name ? (<h1>Hello {this.props.name}!</h1>) : (null)}
                <ChangeName handleNameChange={this.props.handleNameChange}/>
                <h4 className='text-center'>Current Count: {this.props.count}</h4>
                <div className='d-flex justify-content-around'>
                    {myButtonSteps.map((step, i) => <Button key={i} step={step} handleClick={this.props.handleClick} />)}
                </div>
            </>
        )
    }
}
