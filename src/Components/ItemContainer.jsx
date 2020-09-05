import React from 'react';
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../Redux';

const ItemContainer = (props) => {
    return (
        <div className="container" >
            <h3>Item - {props.item} </h3>
            <button onClick={props.buyItem} >Buy Item</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCake : state.iceCream.iceCream
   return {
       item : itemState
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);