import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setAlbums, clearAlbums} from '../initializers/actions';
import axios from 'axios';

class Albums extends Component{

    componentDidMount(){
        this.loadPhotos();
    }

    loadPhotos(){
        axios({
            url: 'https://photoslibrary.googleapis.com/v1/albums',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        })
    }
    render(){
        return (<div> </div>); 
    }
    
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    token: state.token
})

const mapDispatchToProps = {
    setAlbums,
    clearAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);