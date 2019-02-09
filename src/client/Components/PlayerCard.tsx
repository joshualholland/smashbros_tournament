import React from 'react';

const PlayerCard = (props: any) => {
    return (
        <div className="card m-3" style={{ width: '18' + 'rem', display: 'inline-block' }}>
            <img className='card-img-top' src={props.player.avatar} alt='avatar'/>
            <div className="card-body">
                <h5 className="card-title">{props.player.username}</h5>
            </div>
        </div>
    )
};

export default PlayerCard;