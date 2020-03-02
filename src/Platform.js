import React from 'react'
import PlatformItem from './PlatformItem'
import './App.css'

const Platform = props => {
    return (
        <div className='platform'>
            <div className='healthcare'>
                <h2>The world's biggest healthcare platform</h2>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <img src="https://www.docplanner.com/img/logo.png "/>
            </div>
        <div className= 'contain-box'>
            {props.box.map(el => <PlatformItem item={el} />)
            }
        </div>
        </div>
    
    )
}
export default Platform