import React from 'react';
//import {Typography} from '@material-ui/core';
import './card.style.css';

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2>{props.monster.name}</h2>
        {/*
            <Typography>Email:<a href={`mailto:${props.monster.email}`}> {props.monster.email} </a> </Typography>
        */}
        <span>{props.monster.email} </span>
    </div>
)