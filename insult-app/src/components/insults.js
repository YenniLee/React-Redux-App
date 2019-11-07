import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchInsults } from '../actions';
import Insult from './insult';

const InsultList = props => {
    useEffect(() => {
        props.fetchInsults();
    }, []);

    if (props.isFetching) {
        return <h3>Prepare for the Burn...</h3>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.insults.map(insult => (
                <Insult key={insult}
            ))}
        </div>
    )
}

