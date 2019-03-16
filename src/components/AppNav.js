import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Login from '../containers/Login';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



class AppNav extends Component{
    render(){
        return(
            <div>
                <AppBar position='static'>
                    <ToolBar className={this.props.classes.nav}>
                        <Typography color='inherit' variant="h6" component="h1" className={this.props.classes.grow}>
                            Albums
                        </Typography>
                         <Login/>
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles ({
    grow:{
        flexGrow:1,  
        textAlign:"left"
    },
    nav:{
        color: "withe"
    }
}) (AppNav);