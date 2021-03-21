import React,{useState,useEffect,useContext} from 'react';
import GoogleMapReact from 'google-map-react';

import {GlobalStateContext} from '../../ContextApi/ContextApi'
import {fetchData} from '../../ApiCall'

import Box from '@material-ui/core/Box';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

let Maps = () => {

    let {globalState} = useContext(GlobalStateContext)
    let [mapData, setMapData] = useState({isGl:true,data:[]});

    useEffect(()=>{ 
        
        let url = "https://disease.sh/v3/covid-19/countries";
        let getDataByCountry = (globalState.iso2 === "GL") ? "GL" : globalState.iso2;
        let country = globalState.name;
        
        if(getDataByCountry !== "GL")
            url = `https://disease.sh/v3/covid-19/jhucsse`;
        
        fetchData(url).then((data) => {
            if(getDataByCountry !== "GL"){
                let dataSet = data.filter(dataSets => dataSets.country.includes(country));
                setMapData({data:dataSet,isGl:false})
            }else{
                setMapData({data,isGl:true})
            }

        });
    },[globalState]);

    if(mapData.length === 0){
        return "Loading..."
    }
    
    let defaultProps = {
        center: {
            lat: 30.3753,
            lng: 69.3451
        },
        zoom: 6
    };

    let Comp = (mapData.isGl) ? 
        
        mapData.data.map((values,key) => (
                <AnyReactComponent 
                    key={key}
                    lat={values.countryInfo.lat}
                    lng={values.countryInfo.long}
                    text={
                        <div style={{
                            padding:"12px",
                            color: "red",
                            backgroundColor: "#FFECB3",
                            width: "80px",
                            textAlign: "center",
                            borderRadius: "5px"}}>
                            <img src={values.countryInfo.flag} height="12px" alt="flag" />
                            <br />
                            {values.country}
                            <br />
                            active : {values.active}
                        </div>
                    }
                />
            )) :

        mapData.data.map((values,key) => (
            <AnyReactComponent 
                key={key}
                lat={values.coordinates.latitude}
                lng={values.coordinates.longitude}
                text={
                    <div style={{
                        padding:"12px",
                        color: "red",
                        backgroundColor: "#FFECB3",
                        width: "80px",
                        textAlign: "center",
                        borderRadius: "5px"}}>
                        Country : {values.country}
                        <br />
                        Province : {values.province}
                        <br />
                        Active : {values.stats.confirmed}
                        Deaths : {values.stats.deaths}
                        Recovered : {values.stats.recovered}
                    </div>
                }
            />
        )) 

    return (
        <Box align="center" style={{ height: '100vh', width: '95%' , margin:"0 auto", marginTop:"30px",border:"3px solid #FBF2E9",borderRadius:"10px"}}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
                {Comp}
            </GoogleMapReact>
        </Box>
    )} 
    export default Maps;
