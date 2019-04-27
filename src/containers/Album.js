import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setPhotos, clearPhotos, clearAlbum } from '../initializers/actions';
import Axios from 'axios';
import PhotosList from '../components/PhotosList';

class Album extends Component{

    componentDidUpdate(prevProps){
       // this.loadPhotos();
        if(this.props.mainAlbum && this.props.mainAlbum !== prevProps.mainAlbum){
            if(process.env.NODE_ENV === 'production'){
                this.loadPhotos();
            }else{
                import('../data/photos').then(module=>{
                    this.props.setPhotos(module.default.mediaItems);
                })
            }
        }
    }

    loadPhotos(){
        Axios({
            method: 'POST',
            url: 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
            headers:{
                'Authorization': `Bearer ${this.props.token}`
            },
            data:{
                albumId: this.props.mainAlbum.id
            }
        }).then(r=>{
            console.log(r);
            this.props.setPhotos(r.data.mediaItems);
        })
    }
    render(){
        return(<PhotosList 
                clearAlbum={this.props.clearAlbum} 
                clearPhotos={this.props.clearPhotos} 
                album={this.props.mainAlbum} 
                photos={this.props.photos}
               />);
    }
}

const mapStateToProps = (state) => ({
    mainAlbum: state.mainAlbum,
    token: state.token,
    photos: state.photos
}); 

const mapDispatchToProps = {
    setPhotos,
    clearPhotos,
    clearAlbum
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);