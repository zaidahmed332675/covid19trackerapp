import React,{useState,useContext,useEffect} from 'react';
import {Line} from 'react-chartjs-2';

import {GlobalStateContext} from '../../ContextApi/ContextApi'
import {fetchData} from '../../ApiCall'

function Chart(){

  let {globalState} = useContext(GlobalStateContext)
  let [chartData, setChartData] = useState([]);
  let [dailyDate,setDailyDate] = useState([]);

  useEffect(()=>{
    
    let url = `https://disease.sh/v3/covid-19/historical/all?lastdays=200`;
    let getDataByCountry = (globalState.iso2 === "GL") ? "GL" : globalState.iso2;

    if(getDataByCountry !== "GL")
      url = `https://disease.sh/v3/covid-19/historical/${getDataByCountry}?lastdays=200`;
    
    fetchData(url).then((data) => {
      if(getDataByCountry !== "GL"){
        setDailyDate(Object.keys(data.timeline.cases))
        setChartData([data.timeline.cases,data.timeline.deaths,data.timeline.recovered]);
      }else{
        setDailyDate(Object.keys(data.cases))
        setChartData([data.cases,data.deaths,data.recovered]);
      }
    });

},[globalState.iso2,setChartData]);

if(chartData.length === 0){
  return "Loading..."
}

const data = {
  labels: dailyDate.map((date) => (date)),
  datasets: [
    {
      label: 'Active',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(251,242,233,1)',
      borderColor: 'rgba(255,236,179,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(247,221,145,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.values(chartData[0]),
    },
    {
      label: 'Death',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(237,175,170,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(234,133,126,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.values(chartData[1]),
    },
    {
      label: 'Recovered',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(158,214,160,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(114,181,116,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.values(chartData[2]),
    }
  ],
};

  return (
    <Line data={data} />
)}

export default Chart;