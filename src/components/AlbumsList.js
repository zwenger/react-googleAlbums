import React from 'react';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';

import {PoseGroup} from 'react-pose';
import Box from '../animations/Box';


function AlbumsList(props){
   // console.log(props.mainAlbum)
    return(
        <Grid container spacing={16} justify='center'>
            <PoseGroup>
                {
                    props.albums.map((album,index)=>{
                        return(
                            <Box pose={props.mainAlbum ? 'enter' : 'exit'} key={index} position={index} >
                                <AlbumCard  setAlbum={props.setAlbum} album={album}  />
                            </Box>
                        ) 
                    })
                }
            </PoseGroup>
        </Grid>
    );
}


export default withStyles({})(AlbumsList);