import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {PoseGroup} from 'react-pose';

import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Box from '../animations/Box';


function PhotosCarrousel(props){
    return(
    <div className={props.classes.container} >
        <PoseGroup>
            {props.photos.map((photo,index)=>{
                return(
                    <Box key={photo.id} position={index} className={props.classes.card}>
                        <Card >
                            <img src={photo.baseUrl} className={props.classes.img} />
                            <CardContent>
                                <Typography variant='caption' component='p' >
                                {photo.filename}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                );
            })}
        </PoseGroup>
    </div>
    );
}

export default withStyles ({
    container:{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        justifyContent: 'center',
        padding: '1em'
        //minHeight: '620px',
        
        

    },
    card:{
        minWidth: '400px',
        height: '100% !important',
        marginRight: '1em',
    },
    img:{
        maxWidth: '100%',
        height:'400px',
        padding: '2em'
    }
})(PhotosCarrousel);
