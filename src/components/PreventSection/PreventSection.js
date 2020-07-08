import React from 'react';
import cx from 'classnames';

//IMPORTING UI LIBRARIES
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// IMPORTING COMPONENTS
import preventStyle from './PreventSection.module.css';

// IMPORTING BANNER
import prevent1 from '../../images/prevent1.png';
import prevent2 from '../../images/prevent2.png';
import prevent3 from '../../images/prevent3.png';
import prevent4 from '../../images/prevent4.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth : "95%",
      margin: '0 auto',
      font:'TimesNewRoman'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paperStyle: {
        borderRadius:"10px",
    },
    imageSize:{
        maxWidth:"50%",
    },
  }));

function PreventSection(){

    const classes = useStyles();

    return (
        <Box id="preventSection" className={classes.root}>
            <Box mt={5}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <h1 align="center">Covid-19</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Typography>        
                        <Typography variant="subtitle1" align="center">Protect yourself and others around you by knowing the facts and taking appropriate precautions</Typography>        
                        <br/>
                        <Typography variant="h6" align="center">Follow advice provided by your local health authority.</Typography>        
                    </Grid>
                </Grid>
            </Box>
            <Box mt={5}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={5} className={cx(classes.paper,classes.paperStyle)}>
                            <img src={prevent4} alt="prevent4" className={classes.imageSize}/>
                            <br/><br/>
                            <Typography variant="h5" align="center">Wash Your Hands</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={5} className={cx(classes.paper,classes.paperStyle)}>
                            <img src={prevent3} alt="prevent3" className={classes.imageSize}/>
                            <br/><br/>
                            <Typography variant="h5" align="center">Use Face Mask</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={5} className={cx(classes.paper,classes.paperStyle)}>
                            <img src={prevent2} alt="prevent2" className={classes.imageSize}/>
                            <br/><br/>
                            <Typography variant="h5" align="center">Go to The Doctor</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={5} className={cx(classes.paper,classes.paperStyle)}>
                            <img src={prevent1} alt="prevent1" className={classes.imageSize}/>
                            <br/><br/>
                            <Typography variant="h5" align="center">Call Ambulance</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default PreventSection;