import React from 'react'

export default function ChangeName(props) {
    console.log(props)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newName = e.target.newName.value;
        props.handleNameChange(newName);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='mb-3'>
                <label htmlFor='newName' className='form-label'>New Name</label>
                <input type='text' name='newName' className='form-control' placeholder='Enter New Name Here'/>
            </div>
            <input type='submit' className='btn btn-secondary' />
        </form>
    )
}
