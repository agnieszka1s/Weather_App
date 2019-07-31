import React from 'react';
import './Form.css';

class Form extends React.Component {
    render(){
        return (
     <form className="form_container" onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder=" City..."></input>
        <input type="text" name="country" placeholder=" Country..."></input>
        <button className="btn btn-getWeather">Get weather</button>
     </form>
        )
    }
}
 export default Form;