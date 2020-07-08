import React from 'react';

//IMPORTING MATERIAL UI LIBRARIES
import {Box} from '@material-ui/core';

//IMPORTING ALL COMPONENTS
import { WebHeader,PreventSection,StatsSection,Maps } from './components/';
import {ContextProvider} from './ContextApi/ContextApi';

// IMPORTING CUSTOM CSS
import AppStyles from './App.module.css';


function App(){

  return (
    <Box className={AppStyles.container}> 
      <ContextProvider>
        <WebHeader />      
        <PreventSection />
        <StatsSection />
        <Maps />
      </ContextProvider>
    </Box>
  );
}

export default App;
