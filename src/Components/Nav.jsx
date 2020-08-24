import React, {useState, useEffect, useContext} from 'react';
import { Link, withRouter } from 'react-router-dom'
import firebase from '../FireBase/config'
import { Auth } from '../Context/authContext'

const Nav = (props) => {
    const [userState, setUserState] = useState(null)
    const [userEmail, setUserEmail] = useState('')

    const {state, dispatch} = useContext(Auth)

    useEffect(() => {
        firebase.getUserState().then(user => {
            if(user){
                setUserState(user)
                setUserEmail(user.email)
            }
        })
    })

    const logout = () => {
        firebase.logout()
        setUserState(null)
        props.history.replace('/login')
        return dispatch({
            type : 'LOGOUT',
            payload : {}
        })
    }

    let buttons ;
    if(userState != null || state.user.hasOwnProperty('user')){
        console.log(state)
        buttons = (
            <>
            <li> {userEmail} </li>
            <li> <button onClick={logout} className="btn btn-danger" >Logout</button> </li>
            </>
        )
    }else{
        buttons = (
            <>
             <li><Link to="/signin" >signIn</Link></li>
            <li><Link to="/login" >logIn</Link></li>
            </>
        )
    }

    return (
        <div>
            <ul>
                <li><Link to="/" >context hooks</Link></li>
                <li><Link to="/create" >create</Link></li>
                {buttons}
            </ul>
        </div>
    );
};

export default withRouter(Nav);