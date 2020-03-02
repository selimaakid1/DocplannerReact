import React from 'react';


const Logo = (props) => {
    return (
        <div class="links">
            <p>We are a global company with local culture</p>
            <div>
                <ul class="logoContain">{props.array.map(el => <li> <a href="#">{el}</a></li>)}
                </ul>
            </div >

        </div>

    );
}


export default Logo;