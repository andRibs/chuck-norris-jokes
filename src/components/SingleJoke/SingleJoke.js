import React from 'react';
import './SingleJoke.css';

//Single joke when isolated
const singleJoke = (props) => {

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3 className='jokeText'>{props.joke}</h3>
                </div>
                <div className='col-md-6'>

                    <img src='./chuck-norris-jokes/images/chuck-norris.jpg' className="rounded mx-auto d-block" height="300" />
                </div>
            </div>
        </div>
    )
}

export default singleJoke;