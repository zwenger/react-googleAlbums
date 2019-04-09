import React from 'react';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';

function AlbumsList(props){
    return(
        <Grid container spacing={16} justify='center'>
            {
                props.albums.map((album,index)=>{
                    return <AlbumCard setAlbum={props.setAlbum} album={album} key={index} />
                })

            }
        </Grid>
    );
  
}

export default withStyles({})(AlbumsList);