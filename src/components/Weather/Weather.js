import React from 'react';
import "./Weather.css";

// class Weather extends React.Component {
//     render(){
//         return (
//             <div>
//               {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//              {this.props.temperature && <p>Temperature: {Math.floor(this.props.temperature-273.15)}°C</p>}
//                {this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
//             {this.props.description &&   <p>  Conditions:  {this.props.description}</p>}
//             {this.props.error && <p>{this.props}</p>}
//             </div>
//         )
//     }
// }
//  export default Weather;

 const Weather = props => (
    <div>
            {props.citmy && props.country && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {Math.floor(props.temperature-273.15)}°C</p>}
            {props.humidity && <p> Humidity: {props.humidity}</p>}
            {props.description &&   <p>  Conditions:  {props.description}</p>}
            {props.error && <p>{props}</p>}
  </div>
 );
 

 export default Weather;