import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props);
        console.log('Constructed')
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        console.log(`This button with a step of ${this.props.step} has been clicked!`)
        let newCount = this.state.count + this.props.step;
        this.setState({count: newCount})
    }

    render() {
        console.log('Rendered')
        return (
            <button onClick={this.handleClick} className='btn btn-primary d-block w-100'>Current: {this.state.count} Step: {this.props.step}</button>
        )
    }
}
