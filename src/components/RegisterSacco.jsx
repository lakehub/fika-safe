import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class RegisterSacco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataField: {
        name: '',
        email: '',
        telephone_number: '',
        description: '',
        website: '',
        address: '',
        registration_number: '',
        status: '',
        date_founded: '',
        membership: '',
        username: '',
        pwd1: '',
        pwd2: ''
      },
      // error fields
      errMessage: {
        nameErr: '',
        emailErr: '',
        telephone_numberErr: '',
        descriptionErr: '',
        websiteErr: '',
        addressErr: '',
        registration_numberErr: '',
        statusErr: '',
        date_foundedErr: '',
        membershipErr: '',
        usernameErr: '',
        passwordErr: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createSacco = this.createSacco.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // using deep destructuring
  handleChange({ target: { value, name } }) {
    this.setState({
      dataField: { [name]: value }
    });
  }

  // this is the  validating function
  validate = () => {
    const {
      dataField: { email, date_founded }
    } = this.state;

    // const nameErr = '';
    let emailErr = '';
    // const telephone_numberErr = '';
    // const descriptionErr = '';
    // const websiteErr = '';
    // const addressErr = '';
    // const registrationErr = '';
    // const statusErr = '';
    let date_foundedErr = '';
    // const membershipErr = '';
    // const usernameErr = '';
    // const passwordErr = '';

    // date validation
    const isValidDate = Date.parse(date_founded);
    if (isNaN(isValidDate)) {
      // when is not valid date logic
      date_foundedErr = 'invalid date';
      this.setState({ errMessage: { date_foundedErr } });
      // return false;
    }
    console.log(date_foundedErr);

    // email validation
    if (!email.includes('@')) {
      emailErr = 'invalid email';
    }
    console.log(emailErr);
    if (emailErr) {
      this.setState({ errMessage: { emailErr } });
      return false;
    }

    return true;
  };

  // SaccoAdd
  handleSubmit(event) {
    event.preventDefault();
    // const form = document.forms.saccoAdd;

    const {
      dataField: {
        name,
        email,
        telephone_number,
        description,
        website,
        address,
        registration_number,
        status,
        date_founded,
        membership,
        username,
        password2
      }
      // errMessage: {
      //   nameErr,
      //   emailErr,
      //   telephone_numberErr,
      //   descriptionErr,
      //   websiteErr,
      //   addressErr,
      //   registration_numberErr,
      //   statusErr,
      //   date_foundedErr,
      //   membershipErr,
      //   usernameErr,
      //   passwordErr
      // }
    } = this.state;

    const isValid = this.validate();
    if (isValid) {
      this.createSacco({
        contacts: {
          email,
          telephone_number
        },
        about: {
          description,
          website
        },
        name,
        address,
        registration_number,
        status,
        date_founded,
        membership,
        username,
        password: password2
      });
    }
  }

  createSacco(newSacco) {
    fetch('/api/saccos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSacco)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    const {
      errMessage: {
        nameErr,
        emailErr,
        telephone_numberErr,
        descriptionErr,
        websiteErr,
        addressErr,
        registration_numberErr,
        statusErr,
        date_foundedErr,
        membershipErr,
        usernameErr,
        passwordErr
      }
    } = this.state;

    const {
      dataField: {
        name,
        email,
        telephone_number,
        description,
        website,
        address,
        registration_number,
        status,
        date_founded,
        membership,
        username,
        pwd1,
        pwd2
      }
    } = this.state;

    // const classes = useStyles();
    return (
      <div>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />

        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <hr />
        <div className="container bootstrap snippet">
          <div className="row">
            <div className="col-sm-10">
              <h1>Register</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#home">
                    Profile
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="http://localhost:8080/smslogs">
                    Logs
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="home">
                  <hr />
                  <form
                    onSubmit={this.handleSubmit}
                    name="saccoAdd"
                    className="form"
                    action="##"
                    method="post"
                    id="registrationForm"
                  >
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="first_name">
                          <h4>Sacco Name</h4>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={this.handleChange}
                          className="form-control"
                          name="name"
                          placeholder="name"
                          title="enter your first name if any."
                        />
                        <div>{nameErr}</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="registration_number">
                          <h4>Registration Number</h4>
                        </label>
                        <input
                          type="text"
                          value={registration_number}
                          onChange={this.handleChange}
                          className="form-control"
                          name="registration_number"
                          id="registration"
                          placeholder="enter registration number"
                          title="enter your phone number if any."
                        />
                        <div>{registration_numberErr}</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email">
                          <h4>Address</h4>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id="address"
                          value={address}
                          onChange={this.handleChange}
                          placeholder="address"
                          title="enter your adress"
                        />
                        <div>{addressErr}</div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email">
                          <h4>Membership</h4>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={membership}
                          onChange={this.handleChange}
                          id="membership"
                          name="membership"
                          placeholder="membership"
                          title="enter your membership"
                        />
                        <div>{membershipErr}</div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email">
                          <h4>Status</h4>
                        </label>
                        <input
                          name="status"
                          type="text"
                          value={status}
                          onChange={this.handleChange}
                          className="form-control"
                          id="status"
                          placeholder="status"
                          title="status"
                        />
                        <div>{statusErr}</div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email">
                          <h4>Email</h4>
                        </label>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={this.handleChange}
                          placeholder="email"
                          title="enter your email"
                        />
                        <div style={{ color: 'red' }}>{emailErr}</div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone">
                          <h4>Phone</h4>
                        </label>
                        <input
                          name="telephone_number"
                          type="text"
                          onChange={this.handleChange}
                          value={telephone_number}
                          className="form-control"
                          id="phone"
                          placeholder="phone"
                          title="enter Phone Number"
                        />
                        <div>{telephone_numberErr}</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password">
                          <h4>Username</h4>
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={this.handleChange}
                          className="form-control"
                          name="username"
                          placeholder="Description"
                          title="username"
                        />
                        <div>{usernameErr}</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password">
                          <h4>Password</h4>
                        </label>
                        <input
                          type="password"
                          name="pwd1"
                          value={pwd1}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="password"
                          title="enter password"
                        />
                        {passwordErr}
                      </div>
                      <div className="form-group">
                        <div className="col-xs-6">
                          <label htmlFor="password">
                            <h4>Confirm Password</h4>
                          </label>
                          <input
                            type="password"
                            name="pwd2"
                            value={pwd2}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="password"
                            title="enter password"
                          />
                          <div>{passwordErr}</div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-xs-6">
                          <label htmlFor="password">
                            <h4>Wesite Link</h4>
                          </label>
                          <input
                            value={website}
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="website"
                            placeholder="eg www.nduthisacco.org.co.ke"
                            title="enter password"
                          />
                          <div>{websiteErr}</div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-xs-6">
                          <label htmlFor="password">
                            <h4>Description</h4>
                          </label>
                          <input
                            type="text"
                            value={description}
                            onChange={this.handleChange}
                            className="form-control"
                            name="description"
                            placeholder="Description"
                            title="enter password"
                          />
                          <div>{descriptionErr}</div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-xs-6">
                          <label htmlFor="mobile">
                            <h4>Year Founded</h4>
                          </label>
                          <input
                            // <TextField
                            name="date_founded"
                            value={date_founded}
                            onChange={this.handleChange}
                            // label="End"
                            type="date"
                            // defaultValue={date}
                            // className={classes.textField}
                            inputlabelprops={{
                              shrink: true
                            }}
                            // />
                          />
                          <div>{date_foundedErr}</div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-12">
                        <br />
                        <button
                          className="btn btn-lg btn-success"
                          type="submit"
                        >
                          <i className="glyphicon glyphicon-ok-sign" /> Register
                        </button>
                        <button className="btn btn-lg" type="reset">
                          <i className="glyphicon glyphicon-repeat" /> Reset
                        </button>
                      </div>
                    </div>
                    <hr />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterSacco;
