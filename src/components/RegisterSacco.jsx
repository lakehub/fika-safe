import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class RegisterSacco extends Component {
  constructor(props) {
    super(props);
    const x = Date.now();
    const defaultDate = new Date(x).toLocaleDateString('en-US');
    console.log(defaultDate);
    this.state = {
      date: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createSacco = this.createSacco.bind(this);
  }

  onChangeDate(e) {
    const date = e.target.value;
    this.setState({
      date
    });
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

  // SaccoAdd
  handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.saccoAdd;
    this.createSacco({
      contacts: {
        email: form.email.value,
        telephone_number: form.telephone_number.value
      },
      about: {
        // description: form.description.value,
        website: form.website.value
      },
      name: form.name.value,
      address: form.address.value,
      registration_number: form.registration_number.value,
      status: form.status.value,
      date_founded: form.date_founded.value,
      membership: form.membership.value
    });

    form.name.value = '';
    form.email.value = '';
    form.telephone_number.value = '';
    // form.description.value = '';
    form.website.value = '';
    form.address.value = '';
    form.registration_number.value = '';
    form.status.value = '';
    form.date_founded.value = '';
    form.membership.value = '';
  }

  render() {
    const { date } = this.state;

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
                          className="form-control"
                          name="name"
                          id="first_name"
                          placeholder="first name"
                          title="enter your first name if any."
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone">
                          <h4>Registration Number</h4>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="registration_number"
                          id="registration"
                          placeholder="enter registration number"
                          title="enter your phone number if any."
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="mobile">
                          <h4>Year Founded</h4>
                        </label>
                        <input
                          // <TextField
                          id="date"
                          // value={dateGte}
                          onChange={this.defaultDate}
                          label="End"
                          type="date"
                          defaultValue={new Date().toLocaleDateString('en-US')}
                          // className={classes.textField}
                          inputlabelprops={{
                            shrink: true
                          }}
                          // />
                        />
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
                          placeholder="address"
                          title="enter your adress"
                        />
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
                          id="membership"
                          name="membership"
                          placeholder="membership"
                          title="enter your membership"
                        />
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
                          className="form-control"
                          id="status"
                          placeholder="status"
                          title="status"
                        />
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
                          id="email"
                          placeholder="email"
                          title="enter your email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email">
                          <h4>Phone</h4>
                        </label>
                        <input
                          name="telephone_number"
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="phone"
                          title="enter Phone Number"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-12">
                        <br />
                        <button
                          className="btn btn-lg btn-success"
                          type="submit"
                        >
                          <i className="glyphicon glyphicon-ok-sign" /> Save
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
