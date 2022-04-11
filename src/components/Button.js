import React, { Component } from 'react'

export default class Button extends Component {


    render() {
        return (
            <button onClick={() => this.props.handleClick(this.props.step)} className='btn btn-primary'>+{this.props.step}</button>
        )
    }
}
