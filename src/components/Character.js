import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'


class Character extends React.Component{

    render(){

        return(<div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar"
                    src={this.props.image}
                    alt="Character image"/>
                <h1>{this.props.name} <br /> <span className="text-small">{this.props.status}</span></h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.specie} - {this.props.gender}</h3>
                <div>@{this.props.origin}</div>
            </div>

            <div className="Badge__footer">
                {this.props.location}
            </div>;

        </div>);
    }

}

export default Character