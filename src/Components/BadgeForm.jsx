import React from 'react'

class BadgeForm extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    };

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    
    handleClick = (e) => {
        console.log("OPRIMIDO");
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
          <div>
              <h1>New Attendant</h1>
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="">first Name</label>
                      <input onChange = {this.props.onChange} className = "form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="">last Name</label>
                      <input onChange = {this.props.onChange} className = "form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input onChange = {this.props.onChange} className = "form-control" type="email" name="email" value={this.props.formValues.email} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Job title</label>
                      <input onChange = {this.props.onChange} className = "form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="">twitter</label>
                      <input onChange = {this.props.onChange} className = "form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
                  </div>
                  <button onClick = {this.handleClick}  className = "btn btn-primary">Save</button>
              </form>
          </div>  
        );
    }
}

export default BadgeForm;