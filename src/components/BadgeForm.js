import React from 'react';

class BadgeForm extends React.Component {

   /*  state = {
        firstName:'',
        lastName:'',
        email: '',
        jobTitle: '',
        twitter: ''
    }; */


    handleChange = (e) =>{
        /* console.log({
            name: e.target.name,
            value: e.target.value
        }) */

        /* this.setState({
            [e.target.name]: e.target.value,
        }) */
    }

    handleClick = (e) =>{
        console.log('button was clicked')
    }

    handleSubmit = (e) =>{
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            value={this.props.formValueslastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" 
                            value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter" 
                            value={this.props.formValues.twitter} />
                    </div>

                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;