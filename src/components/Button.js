import React, { Component } from 'react'

export default class Button extends Component {


    render() {
        console.log('Rendered')
        return (
            <button onClick={() => this.props.handleClick(this.props.step)} className='btn btn-primary d-block w-100'>Step: {this.props.step}</button>
        )
    }
}
