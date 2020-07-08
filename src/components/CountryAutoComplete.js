import React,{useState,useEffect,useContext} from 'react';

// API CALLING
import {getCountryDetails} from '../ApiCall';
import {GlobalStateContext} from '../ContextApi/ContextApi'

//IMPORTING MATERAILUI LIBRARIES
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        fontSize: 18,
      },
    },
  });

function CountryAutoComplete(){ 

    const classes = useStyles();

    let {globalState,updateGlobalState} = useContext(GlobalStateContext)

    let [countriesList,setCountriesList] = useState([]);
    let setCountrySelected = useState(globalState)[1];

    useEffect(()=>{
        let url = "https://covid19.mathdro.id/api/countries";
        getCountryDetails(url).then(({countries})=>{
          setCountriesList(countries);
        });
    },[]);

    return (
        <Autocomplete
        id="country-select"
        options={countriesList}
        classes={{
            option: classes.option,
        }}
        value={globalState}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
            <React.Fragment>
            {option.name} ({option.iso2})
            </React.Fragment>
        )}
        onChange={(event, newInputValue) => {
          setCountrySelected(newInputValue)
          updateGlobalState(newInputValue)
        }}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Choose a country"
            variant="standard"
            inputProps={{
                ...params.inputProps,
            }}
            />
        )}
        />
    );
}

export default CountryAutoComplete;
