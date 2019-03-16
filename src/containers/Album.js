import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setAlbums, clearAlbums} from '../initializers/actions';

class Albums extends Component{
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