import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setAlbums, clearAlbums, setAlbum} from '../initializers/actions';
import axios from 'axios';
import AlbumsList from '../components/AlbumsList';

class Albums extends Component{

    componentDidMount(){
        //this.loadPhotos();
        if(process.env.NODE_ENV === 'production'){
            this.loadPhotos();
        }else{
            import('../data/albums').then(module=>{
                this.props.setAlbums(module.default.albums)
            })
        }
    }

    loadPhotos(){
        axios({
            url: 'https://photoslibrary.googleapis.com/v1/albums',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        }).then(r=>{
            this.props.setAlbums(r.data.albums);
        }).catch(console.log);
    }

    render(){
        return (<AlbumsList 
                    mainAlbum={this.props.mainAlbum} 
                    setAlbum={this.props.setAlbum}
                    albums={this.props.albums}
                 />);
    }
    
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    token: state.token,
    mainAlbum: state.mainAlbum
});

const mapDispatchToProps = {
    setAlbums,
    clearAlbums,
    setAlbum
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);

    