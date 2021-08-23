import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AxisPro } from './AxisPro'
import reportWebVitals from './reportWebVitals';
import ComposableMap from './components/ComposableMap';
import Geographies from './components/Geographies';
import Geography from './components/Geography';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

ReactDOM.render(
  <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
    </ComposableMap>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
