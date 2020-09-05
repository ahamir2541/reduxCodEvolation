import React, {useState} from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../Redux';

const NewCake = (props) => {
    const [number, setNumber] = useState(1)

    return (
        <div className="container">
            <h1>New cake area</h1>
            <h2>number of cake : {props.numOfCake} </h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value) } />
            <button onClick={ () => props.buyCake(number)}>Buy Cake {number} </button>
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
        buyCake : number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCake);