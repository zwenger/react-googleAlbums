import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AlbumCard from './AlbumCard';

function AlbumsList(props){
  return(
    <Grid container spacing={16} justify='center'>
        {
            props.albums.map((album,index)=>{
            return <AlbumCard album={album} key={index} />
            })
        }
    </Grid>
  );
}

export default withStyles({})(AlbumsList);