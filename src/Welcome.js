import React from 'react'
import './App.css'

const Welcome = (props) => {
    return (
        <div className='welome'>
            <img src='https://www.docplanner.com/img/sygnet.png' className='welcome-img' />
            {props.welcome.map(el => (
                <div >
                    <h1 className='welcomeTitle'>{el.text}</h1>
                </div>))}
            
        </div>

    )
}




export default Welcome;