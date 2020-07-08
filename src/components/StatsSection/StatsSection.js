import React,{useState,useContext, useEffect} from 'react';
import {fetchData} from '../../ApiCall'
//IMPORTING UI LIBRARIES
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// IMPORTING COMPONENTS
import {Chart,CountryAutoComplete,Cards} from '../../components';
import {GlobalStateContext} from '../../ContextApi/ContextApi'

// IMPORTING BANNER
import activeStatus from '../../images/active.png';
import confirmedStatus from '../../images/confirmed.png';
import deathStatus from '../../images/deaths.png';
import recoveredStatus from '../../images/recovered.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth : "95%",
      margin: '0 auto',
      font:'TimesNewRoman'
    },
  }));

function PreventSection(){

    const classes = useStyles();

    let {globalState} = useContext(GlobalStateContext)
    let [statsData, setStatsData] = useState({});

    useEffect(()=>{
        let url = "https://covid19.mathdro.id/api";
        let getDataByCountry = (globalState.iso2 === "GL") ? "GL" : globalState.iso2;
        if(getDataByCountry !== "GL")
            url = `https://covid19.mathdro.id/api/countries/${getDataByCountry}`;

        fetchData(url).then(({confirmed,recovered,deaths,lastUpdate}) =>{
            let active = {value: confirmed.value - (recovered.value + deaths.value)}
            setStatsData({confirmed,recovered,deaths,active,lastUpdate});
        });

    },[globalState.iso2,setStatsData]);

    return (
        <Box id="preventSection" className={classes.root}>
            
            <Box mt={5}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <h1 align="center">Covid-19 Statistics</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center">Here you can find 100% updated stats realted to coronavirus.</Typography>        
                        <Typography variant="subtitle1" align="center">Globally | Coutry Wise | City Wise</Typography>        
                    </Grid>
                </Grid>
            </Box>
            
            <Box style={{width:"50%",margin:"0 auto",marginTop:"40px"}}>
                <CountryAutoComplete />
            </Box>

            <Box mt={5}>
                <Grid container spacing={4}>
                    
                    <Grid item xs={12} sm={3}>
                        <Grid container spacing={4}>
                            <Cards bgColor="#FBF2E9" title="Confirmed" src={confirmedStatus} data={statsData.confirmed} />
                            <Cards bgColor="#ffecb3" title="Active" src={activeStatus} data={statsData.active} />
                            <Cards bgColor="#F4C7C3" title="Deaths" src={deathStatus} data={statsData.deaths} />
                            <Cards bgColor="#C8E6C9" title="Recovered" src={recoveredStatus} data={statsData.recovered} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Chart />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    );
}

export default PreventSection;