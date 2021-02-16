import React from 'react'
import { Link } from 'react-router-dom'

//utilities
import './styles/Home.css'
import astronauts from '../images/astronauts.svg'
import platziconf from '../images/platziconf-logo.svg'

class Home extends React.Component {
    render() {
        return(
            <div className="Home__container">
                <div className="Home__left">
                    <img src={platziconf} alt="Platzi Conf logo" />
                    <h1>PRINT YOUR BADGES</h1>
                    <p>The easiest way to manage your conference</p>
                    <div className="Home__button-container">
                        <Link to="/badges" className="btn btn-primary btn-lg">Start now</Link>
                    </div>
                </div>
                <div className="Home__right">
                    <img src={astronauts} alt="Astronauts" />
                </div>
            </div>
        )
    }
}

export default Home