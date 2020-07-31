// STEP 1 - Include Dependencies
// Include react
import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import TopNavbar from './components/TopNavbar/TopNavbar';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    label: "Alimosho",
    value: "6.16"
  },
  {
    label: "Ajeromi-Ifelodun",
    value: "0.59"
  },
  {
    label: "Kosofe",
    value: "1.03"
  },
  {
    label: "Mushin",
    value: "5.62"
  },
  {
    label: "Oshodi-Isolo",
    value: "1.40"
  },
  {
    label: "Ojo",
    value: "1.86"
  },
  {
    label: "Ikorodu",
    value: "8.0"
  },
  {
    label: "Surulere",
    value: "6.0"
  },
  {
    label: "Agege",
    value: "4.554"
  },
  {
    label: "Ifako-Ijaiye",
    value: "1.697"
  },
  {
    label: "Somolu",
    value: "3.03"
  },
  {
    label: "Amuwo-Odofin",
    value: "1.397"
  },
  {
    label: "Lagos Mainland",
    value: "3.40"
  },
  {
    label: "Ikeja",
    value: "1.86"
  },
  {
    label: "Eti-Osa",
    value: "1.50"
  },
  {
    label: "Apapa",
    value: "5.1"
  },
  {
    label: "Lagos Island",
    value: "0.5"
  },
  {
    label: "Epe",
    value: "0.907"
  },
  {
    label: "Ibeju-Lekki",
    value: "0.907"
  },
  {
    label: "Badagry",
    value: "2.907"
  }
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "1500", // Width of the chart
  height: "600", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Lagos crime statistics in relation to Location  [2017-18]",
      //Set the chart subcaption
      subCaption: "Offences against property",
      //Set the x-axis name
      xAxisName: "LGA(S)",
      //Set the y-axis name
      yAxisName: "No of times crime was filed",
      numberSuffix: "k",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component
{
  render() 
  {
    return (
      <div>
          {/* <ReactFC {...chartConfigs} /> */}
          <TopNavbar />
      </div>
    );
  }
}

export default App;