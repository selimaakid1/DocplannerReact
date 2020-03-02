import React from 'react'
import './App.css'

const Cards = (props) => {
    return (
        <div className='cardLi'>
            {props.data.map(el => (
                <div className='cardContain' style={{ background: el.background }}>
                    <p className='card-title'>{el.title}</p>
                    <h1 className='card-text'>{el.text}</h1>
                    <img src={el.imgURL} className='pc'></img>
                    {el.select && (
                        <select className='selectList'>
                            {el.select.map(el => <option>{el}</option>)}
                        </select>
                    )}

                </div>
            ))}


        </div>
    )
}

export default Cards