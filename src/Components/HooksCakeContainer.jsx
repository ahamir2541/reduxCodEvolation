import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  } from '../Redux'
import { buyCake } from '../Redux';

const HooksCakeContainer = () => {
    const numOfCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()
    return (
        <div className="container" >
            <h2> Hooks : num of cake : {numOfCake} </h2>
            <button onClick={() => dispatch(buyCake()) } >Buy cake</button>
        </div>
    );
};

export default HooksCakeContainer;