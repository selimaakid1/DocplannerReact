import React from 'react';

const Country = (props) => {
    return (
        <div className="office-country">
            {props.country.map(el => <div class="pays">
                <img className="pays-img" src={el.img} alt="image" />
                <div className="pays-text"> <h3>{el.title}</h3>
                    <button>{el.button}</button>
                </div></div>


            )}

        </div>







    );
}


export default Country;