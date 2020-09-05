import React from 'react';
import { connect } from 'react-redux'
import { buyIceCream } from '../Redux'

const IceCreamContainer = (props) => {
    return (
        <div className="container">
            <h2>number of iceCream : {props.iceCream} </h2>
            <button onClick={props.buyIceCream} >Buy iceCream</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        iceCream : state.iceCream.iceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);