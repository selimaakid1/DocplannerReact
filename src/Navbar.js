import React from 'react'
import './App.css'

const Navbar = (props) => {
    return (
        <div className='nav'>
            <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" className="logo" />
            <div className='navLinksContain'>

            {props.menu.map(el =>
                <div>
                    <a className='navLinks' href={el.link}>{el.text}
                    {el.submenu && (<div className="sub-list">
                        {el.submenu.map(el => <a>{el}</a>)}
                    </div>)}
                    </a>
                </div>
            )}
            </div>
        </div>


    )
}

export default Navbar;