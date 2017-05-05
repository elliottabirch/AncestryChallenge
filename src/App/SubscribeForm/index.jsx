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
      firstNameClass: '',
      lastNameClass: '',
      emailClass: '',
    };
    this.validateEmailString = function (email) {
      const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return re.test(email);
    };
    this.warning = () => ([<svg width="12px" height="11px" viewBox="0 0 12 11"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M5.5178527,0 L11.1028388,10.572042 L0,10.5661402 L5.5178527,0 Z M5.01984563,2.5 L5.01984563,6.70281972 L6.01984563,6.70281972 L6.01984563,2.5 L5.01984563,2.5 Z M6.03443987,9.11619379 L6.03443987,8.05396998 L5.03443987,8.05396998 L5.03443987,9.11619379 L6.03443987,9.11619379 Z" id="Combined-Shape" fill="#F4392C" /></g></svg>]);
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
    this.validateName('showFirstNameError', 'firstNameClass', firstName);
    this.validateName('showLastNameError', 'lastNameClass', lastName);
    this.validateEmail(email);
    return this.validateName('showFirstNameError', firstName) && this.validateName('showLastNameError', lastName) && this.validateEmail(email);
  }
  validateName(property, classProperty, name) {
    const newState = {};
    if (!name) {
      newState[property] = true;
      newState[classProperty] = 'warning';
      this.setState(newState);
      return false;
    }
    newState[property] = false;
    newState[classProperty] = '';
    this.setState(newState);
    return true;
  }

  validateEmail(email) {
    if (!this.validateEmailString(email)) {
      this.setState({
        showEmailerror: true,
        emailClass: 'warning',
      });
      return false;
    }
    this.setState({
      showEmailerror: false,
      emailClass: '',
    });
    return true;
  }

  render() {
    return (
      <div className="subscribeFormContainer">
        <form className="subscribeForm" action="" onSubmit={e => this.submitNewUser(this.state.firstName, this.state.lastName, this.state.email, e)}>
          <div className={`nameInputContainer ${this.state.firstNameClass}`}>
            <label>Your first name</label> {this.state.showFirstNameError && <span className="errorMessage">Required</span>}
            <input type="text" className="nameInput" label="firstName" onChange={e => this.setProperty('firstName', e)} />
          </div>
          <div className={`nameInputContainer ${this.state.lastNameClass}`}>
            <label>Your last name</label> {this.state.showLastNameError && <span className="errorMessage">Required</span>}
            <input type="text" className="nameInput" label="lastName" onChange={e => this.setProperty('lastName', e)} />
          </div>
          <div className={`emailInputContainer ${this.state.emailClass}`}>
            <label>Your email</label> {this.state.showEmailerror && <span className="errorMessage">A valid email is required</span>}
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
