import React, { Component } from 'react';
import firebase from '../initializers/firebase';

import {connect} from 'react-redux'
import {saveToken} from '../initializers/actions'
import {clearToken} from '../initializers/actions'

import AuthElements from '../components/AuthElements'





class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            userLoggedIn: false, 
            photoURL: ''
        };
    }
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user)
            if (user) {
                //hay inicio de sesion 
                this.setState({
                    userLoggedIn:true,
                    photoURL: user.providerData[0].photoURL
                })
            } else {
                //no hay inicio de sesion
                this.setState({
                    userLoggedIn:false,
                    photoURL: ''
                })
            }
        })
    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
        firebase.auth().signInWithPopup(provider).then(result=>{
            let token = result.credential.accessToken;
            this.props.saveToken(token);
        }).catch(error=>{
            console.log(error);
        })
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.props.clearToken();
        });
    }

    render (){
        return(
            <AuthElements
                login={this.login}
                logout={this.logout}
                userLoggedIn={this.state.userLoggedIn}
                token={this.props.token}
                photoURL={this.state.photoURL }
            
            />
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        token: state.token
    }
}



const mapDispachToProps = {
    saveToken,
    clearToken
}


export default connect(mapStateToProps,mapDispachToProps)(Login);



