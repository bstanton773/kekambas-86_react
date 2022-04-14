import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3 className='text-center'>Login Here</h3>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' className='form-control' placeholder='Username' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' className='form-control' placeholder='Password' />
                    <input type='submit' className='btn btn-primary w-100' value='Login' />
                </div>
            </form>
        )
    }
}
