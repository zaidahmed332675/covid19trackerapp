import React from 'react';
import CountUp from 'react-countup'

import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    imageSize:{
        maxWidth:"100%",
    },
  }));

function Cards({bgColor,src,data,title}){

    const classes = useStyles();
    
    if(!data){
        return "Loading...";
    }

    return  <Grid item xs={12} sm={6} md={12}>
                <Paper elevation={3} className={classes.paper} style={{display:"flex",backgroundColor:`${bgColor}`}}>
                    <Box align="left" style={{width:"70px"}}>
                        <img src={src} alt={title} className={classes.imageSize}/>
                    </Box>
                    <Box ml={3}>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography variant="h6">{title}</Typography>
                    </Box>
                </Paper>
            </Grid>
}

export default Cards;