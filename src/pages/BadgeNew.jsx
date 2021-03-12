import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../Components/Badge';
import BadgeForm from '../Components/BadgeForm';

class BadgeNew extends React.Component{
    state = {form: {
        firstName: 'Brandon',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
      },
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render(){
        return(
            <React.Fragment>
                <div className = "BadgeNew__hero">
                    <img className = "img-fluid" src={header} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName = {this.state.form.firstName}
                                lastName = {this.state.form.lastName}
                                twitter = {this.state.form.twitter}
                                jobTitle = {this.state.form.jobTitle}
                                avatarURL = "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm  onChange = {this.handleChange} 
                                        formValues = {this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default BadgeNew;