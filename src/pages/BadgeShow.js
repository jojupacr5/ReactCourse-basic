import React from 'react'
import {Link} from 'react-router-dom'

//Components
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Character from '../components/Character'
import Modal from '../components/Modal'

//utilities
import './styles/BadgeShow.css'
import confLogo from '../images/platziconf-logo.svg'

class BadgeShow extends React.Component {

    state = {
        loading: true, 
        error: null,
        data: {},
        modalIsOpen: false,
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})
        
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.characterId}`)
            const data = await response.json()

            this.setState({
                loading: false, 
                data: data
            })
        }catch (error){
            this.setState({loading: false, error: error})
        }
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <h1 className="text-white">{this.state.data.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Character name={this.state.data.name}
                            image={this.state.data.image} 
                            status={this.state.data.status}
                            specie={this.state.data.species} 
                            gender={this.state.data.gender} 
                            origin={this.state.data.origin.name} 
                            location={this.state.data.location.name} />
                        </div>
                        <div className="col">
                            <h2>Actions:</h2>
                            <div>
                                <Link to="/badges" className="btn btn-primary">Back to List</Link>
                                <div>
                                    <button onClick={this.handleOpenModal} className="btn btn-danger mt-2">Delete</button>
                                    <Modal isOpen={this.state.modalIsOpen} onOpen={this.handleOpenModal} onClose={this.handleCloseModal}>
                                        <div className="Modal__body">
                                            <h1>Creías que podrías borrar data?! :'v</h1>
                                        </div> 
                                        <div className="Modal__footer">
                                            <button onClick={this.handleCloseModal} className="btn btn-secondary">Gomenasai sempai!</button>
                                        </div>    
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default BadgeShow