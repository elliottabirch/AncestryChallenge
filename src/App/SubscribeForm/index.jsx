import React, { Component } from 'react';
import './SubscribeForm.css';

class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      showFirstNameError: false,
      showLastNameError: false,
      showEmailerror: false,
    };
    this.createErrorMessage = noun => `You didn't input a ${noun}`;
    this.validateEmailString = function (email) {
      const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return re.test(email);
    };
  }

  setProperty(property, e) {
    const state = {};
    state[property] = e.target.value;
    this.setState(state);
  }

  submitNewUser(firstName, lastName, email, e) {
    e.preventDefault();
    if (this.validateForm(firstName, lastName, email)) {
      /* Here we would add the user to our database and potentially reroute the user */
    }
  }

  validateForm(firstName, lastName, email) {
    this.validateName('showFirstNameError', firstName);
    this.validateName('showLastNameError', lastName);
    this.validateEmail(email);
    return this.validateName('showFirstNameError', firstName) && this.validateName('showLastNameError', lastName) && this.validateEmail(email);
  }
  validateName(property, name) {
    const newState = {};
    if (!name) {
      newState[property] = true;
      this.setState(newState);
      return false;
    }
    newState[property] = false;
    this.setState(newState);
    return true;
  }

  validateEmail(email) {
    if (!this.validateEmailString(email)) {
      this.setState({
        showEmailerror: true,
      });
      return false;
    }
    this.setState({
      showEmailerror: false,
    });
    return true;
  }

  render() {
    return (
      <div className="subscribeFormContainer">
        <form className="subscribeForm" action="" onSubmit={e => this.submitNewUser(this.state.firstName, this.state.lastName, this.state.email, e)}>
          <div className="nameInputContainer">
            <label>Your first name</label> {this.state.showFirstNameError && <span className="errorMessage">{this.createErrorMessage('first name')}</span>}
            <input type="text" className="nameInput" label="firstName" onChange={e => this.setProperty('firstName', e)} />
          </div>
          <div className="nameInputContainer">
            <label>Your last name</label> {this.state.showLastNameError && <span className="errorMessage">{this.createErrorMessage('last name')}</span>}
            <input type="text" className="nameInput" label="lastName" onChange={e => this.setProperty('lastName', e)} />
          </div>
          <div className="emailInputContainer">
            <label>Your email</label> {this.state.showEmailerror && <span className="errorMessage">{this.createErrorMessage('valid email')}</span>}
            <input type="text" className="emailInput" label="email" onChange={e => this.setProperty('email', e)} />
          </div>
          <button className="getStartedButton">GET STARTED</button>
        </form>
        <p className="disclaimer">By creating an account, you agree to <a>Ancestry Tems and Conditions</a> and understand that your information will be used in accordance with our <a>Privace Statement</a>, including that we will send you emails about our service and special offers</p>

      </div>

    );
  }
}

export default SubscribeForm;
