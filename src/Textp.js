import React from 'react';
import './App.css'

const Textp = (props) => {
    return (
        <div className='textContain'>
            {props.paragraphes.map (el => (
                <div>
                    <p className='textP'>{el.p}</p>

                </div>


            ))}
        </div>
    )
}

export default Textp