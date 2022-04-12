import React, { Component } from 'react'
import Button from '../components/Button';

export default class Home extends Component {
    render() {
        const myButtonSteps = [1, 10, 100, 1000, 10000, 100000]
        return (
            <>
                <h1>Hello World!</h1>
                <h4 className='text-center'>Current Count: {this.props.count}</h4>
                <div className='d-flex justify-content-around'>
                    {myButtonSteps.map((step, i) => <Button key={i} step={step} handleClick={this.props.handleClick} />)}
                </div>
            </>
        )
    }
}
