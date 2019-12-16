import React from 'react';


const Card = props => {
    return(
        <div className='playercard'>
            <h2>{props.player.name}</h2>
            <h3>Country: {props.player.contry}</h3>
            <h3>Searches: {props.player.searches}</h3>
        </div>
    )
}
export default Card;