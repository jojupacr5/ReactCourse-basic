import React from 'react'
import { Link } from 'react-router-dom'

//Components
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

//Utilities
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'

class Badges extends React.Component {

    constructor(props) {
        super(props);
        console.log('1. constructor()')

        this.state = {
            loading: true,
            error: null,
            data: {
                results: []
            }
        };
    }

    componentDidMount() {
        console.log('3. componentDidMount()')
        this.fetchData()

        /* this.timeoutId = setTimeout(() => {
            this.setState({
                data: undefined
            })
        }, 3000); */
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()')

        console.log({
            prevProps: prevProps,
            precState: prevState
        })

        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount()')
    }

    //funciones
    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/')
            const data = await response.json()

            this.setState({
                loading: false, 
                data: {
                    results: data.results
                } 
            })
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    render() {
        console.log('2. render()')

        if(this.state.loading === true) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_cong-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList characters={this.state.data.results} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges