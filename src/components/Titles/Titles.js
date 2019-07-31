import React from 'react';
import "./Titles.css"


class Titles extends React.Component {
    render(){
        return (
            <div className="title_container">
                <h1>
                    Weather Finder
                </h1>
                <p>Find out temperature, conditions and more...</p>
            </div>
        )
    }
}

export default Titles;
