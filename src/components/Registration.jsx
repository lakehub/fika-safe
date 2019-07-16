import React, { Component } from "react";
import SmsList from './SmsList'



class Registration extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <hr />
        <div className="container bootstrap snippet">
          <div className="row">
            <div className="col-sm-10"><h1>Register</h1></div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="text-center">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                <h6>Upload a photo</h6>
                <input type="file" className="text-center center-block file-upload" />
              </div><br />
  
            </div>
            <div className="col-sm-9">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Profile</a></li>
                <li><a data-toggle="tab" href="http://localhost:8080/smslogs">Logs</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="home">
                  <hr />
                  <form className="form"  action="##" method="post" id="registrationForm">
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="first_name"><h4>First name</h4></label>
                        <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="last_name"><h4>Last name</h4></label>
                        <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone"><h4>Phone</h4></label>
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="mobile"><h4>Motorcycle Plate Number</h4></label>
                        <input type="text" className="form-control" name="plateNumber" id="plateNumber" placeholder="enter Plate Number" title="enter your Plate Number" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email"><h4>Insurance</h4></label>
                        <input type="text" className="form-control" name="insurance" id="insurance" placeholder="insurance" title="enter your insurance number" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email"><h4>Location</h4></label>
                        <input type="text" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password"><h4>Base</h4></label>
                        <input type="text" className="form-control" name="base" id="base" placeholder="base" title="enter your base" />
                      </div>
                    </div>
  
                    <div className="form-group">
                      <div className="col-xs-12">
                        <br />
                        <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat" /> Reset</button>
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
  


export default Registration;