import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


function PhotosCarrousel(props){
    return(
    <div className={props.classes.container}>
        {props.photos.map((photo,index)=>{
            return(
                <Card key={photo.id} className={props.classes.card}>
                    <img src={photo.baseUrl} className={props.classes.img} />
                    <CardContent>
                        <Typography variant='caption' component='p' >
                        {photo.filename}
                        </Typography>
                    </CardContent>
                </Card>
            );
        })}

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
    },
    card:{
        minWidth: '400px',
        marginRight: '1em'
    },
    img:{
        maxWidth: '100%',
        height:'auto'
    }
})(PhotosCarrousel);
