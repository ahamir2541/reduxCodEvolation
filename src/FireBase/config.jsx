import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyC7HMYLKgamp3B3CFstS_ndqlTdOdM-dzs",
    authDomain: "contextfirebase.firebaseapp.com",
    databaseURL: "https://contextfirebase.firebaseio.com",
    projectId: "contextfirebase",
    storageBucket: "contextfirebase.appspot.com",
    messagingSenderId: "1019806096234",
    appId: "1:1019806096234:web:9fd04aaeb7e37fa07a6313",
    measurementId: "G-KKTHH8E9WK"
};

class Firebase {
    constructor(){
        firebase.initializeApp(config)
        this.auth = firebase.auth()
        this.db = firebase.firestore()
    }

    //login
    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            console.log(err)
            return err
        })
        return user
    }

    //signIn
    async signIn(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            console.log(err)
            return err
        })
        return user
    }
    
    //logout
    async logout(){
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err)
            return err
        })
        return logout
    }

    //getUserState
    async getUserState(){
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }


}

export default new Firebase()
