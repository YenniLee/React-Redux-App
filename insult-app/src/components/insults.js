import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchInsults } from '../actions';

const Insult = (props) => {
    // console.log('props', props)
    useEffect(() => {
        props.fetchInsults();
    }, []);

    if (props.isFetching) {
        return <h1>Are You Ready?</h1>
    }

    return (
        <div className='insult-box'>
           <p>{props.insult}</p>
           <button onClick={props.fetchInsults}>New Burn</button>
        </div>
    )
};

const mapStateToProps = state => {
    // console.log('state', state)
    return {
        insult: state.insult,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, { fetchInsults })(Insult);

