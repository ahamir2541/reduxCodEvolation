import React from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../Redux';

const CakeContainer = (props) => {
    return (
        <div className="container">
            <h2>number of cake : {props.numOfCake} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCake : state.cake.numOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);