import React from 'react';

const RacerForm = (props) => {
    return (
        <form>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <input type='text' className='form-control' name='season' placeholder='Season' />
                </div>
                <div className='col-12 col-md-6'>
                    <input type='text' className='form-control' name='round' placeholder='Round' />
                </div>
            </div>
            <div className='row'>
                <div className='col d-flex'>
                    <input type='submit' className='btn btn-info align-self-center' /> 
                </div>
            </div>
        </form>
    )
}

export default RacerForm;
