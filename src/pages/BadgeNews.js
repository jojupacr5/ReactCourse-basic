import React from 'react'

// Components
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

// Utilities
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNews.css'

class BadgeNew extends React.Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = (e) => {
        e.preventSubmit()
    }

    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="contaainer">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName ={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName = {this.state.form.lastName || 'LAST_NAME'}
                                jobTitle = {this.state.form.jobTitle || 'JOB_TITLE'}
                                imageUrl = "https://www.gravatar.com/avatar?d=identicon"
                                twitter = {this.state.form.twitter || 'TWITTER'}
                                email = {this.state.form.email || 'EMAIL'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew