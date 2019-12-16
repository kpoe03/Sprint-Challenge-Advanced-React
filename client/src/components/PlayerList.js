import React from 'react';
import Card from './Card'

const PlayerList = props => {
    return (
        <div className='player-list'>
            {props.players.map(player =>(
                <Card key={player.id} player={player}/>
            ))}
        </div>
    )
}

export default PlayerList;