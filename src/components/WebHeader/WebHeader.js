import React from 'react';

//IMPORTING UI LIBRARIES
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// IMPORTING BANNER
import banner from '../../images/banner1.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function WebHeader(){

    const classes = useStyles();    

    return (
        <Box className={classes.root}>
            <AppBar position="sticky" style={{ background: '#081D3C',borderRadius:"10px 10px 0 0"}}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>COVID 19</Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About Corona</Button>
                    <Button color="inherit">Symptoms</Button>
                    <Button color="inherit">Contact Us</Button>
                </Toolbar>
            </AppBar>
            <Box>
              <img src={banner} alt="Banner" style={{width:"100%" ,borderRadius:"0 0 10px 10px"}} />
            </Box>
        </Box>
    );
}

export default WebHeader;