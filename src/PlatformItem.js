import React from 'react'
import './App.css'


const PlatformItem = props => {
    return(
        <div className='boxes'>
            <img src={props.item.img} />
            <h3>{props.item.title}</h3>
            <p>{props.item.text}</p>


        </div>


    )
}

export default PlatformItem