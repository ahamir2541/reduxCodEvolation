import React, {useState, useContext} from 'react';
import { Redirect,  } from 'react-router-dom';
import firebase from '../FireBase/config';
import { Auth } from '../Context/authContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [routeRedirect, setRouteRedirect] = useState(false)

    const {state, dispatch} = useContext(Auth)

    const login = async(e) => {
        e.preventDefault()
        

        let response = await firebase.login(email, password);
        if(response.hasOwnProperty("message")){
            console.log(response.message)
        }else{
            // console.log(response.user)
            setRouteRedirect(true)
            return dispatch({
                type : "LOGIN",
                payload : response.user
            })
        }

    }

    const redirect = routeRedirect
    if(redirect){
        return <Redirect to="/" />
    }

    return (
        <div>
            <form onSubmit={login} >
                <p>Welcome back</p>

                <label htmlFor="">Eamail :</label>
                <input type="email" name="email" placeholder="eamil" onChange={e => setEmail(e.target.value)} />

                <label htmlFor="">password :</label>
                <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />

                <input type="submit" value="login" />
            </form> 
        </div>
    );
};

export default Login;