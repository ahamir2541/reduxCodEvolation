import React, {useState, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../FireBase/config';
import { Auth } from '../Context/authContext';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [routeRedirect, setRouteRedirect] = useState(false)

    const {state, dispatch} = useContext(Auth)

    const signIn = async(e) => {
        e.preventDefault()
        console.log(state)
        
        let response = await firebase.signIn(email, password);
        if(response.hasOwnProperty("message")){
            console.log(response.message)
        }else{
            console.log(response.user)
            setRouteRedirect(true)
            return dispatch({
                type : 'SIGNIN',
                payload : response
            })
        }

        console.log(state.user)
    }

    const redirect = routeRedirect
    if(redirect){
        return <Redirect to="/" />
    }

    return (
        <div>
            <form onSubmit={signIn} >
                <p>Create an account</p>

                <label htmlFor="">Eamail :</label>
                <input type="email" name="email" placeholder="eamil" onChange={e => setEmail(e.target.value)} />

                <label htmlFor="">password :</label>
                <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />

                <input type="submit" value="create account" />

            </form>
        </div>
    );
};

export default SignIn;