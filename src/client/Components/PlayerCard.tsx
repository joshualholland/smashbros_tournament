import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = (props: any) => {
    return (
        <div className="card m-3" style={{ width: '18' + 'rem', display: 'inline-block' }}>
            <div className="card-body">
                <h5 className="card-title">{props.player.username}</h5>
                <Link to={`/player/${props.player.id}`} className="btn btn-secondary">Edit Player</Link>
            </div>
        </div>
    )
};

export default PlayerCard;