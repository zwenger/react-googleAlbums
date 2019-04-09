import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


function PhotosCarrousel(props){
    return(
    <div>
        {props.photos.map((photo,index)=>{
            return(
                <Card key={photo.id}>
                    <img src={photo.baseUrl} />
                    <div>
                        <Typography variant='caption' component='p'>
                        {photo.filename}
                        </Typography>
                    </div>
                </Card>
            );
        })}

    </div>
    );
}

export default withStyles ({})(PhotosCarrousel);
