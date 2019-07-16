import React, { Component } from "react";



class RegiserSacco extends Component {
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
 
            <div className="col-sm-9">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Profile</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="home">
                  <hr />
                  <form className="form" action="##" method="post" id="registrationForm">
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="sacco_name"><h4>Sacco Name</h4></label>
                        <input type="text" className="form-control" name="sacco_name" id="sacco_name" placeholder="sacco name" title="enter sacco name" />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone"><h4>Registration Number</h4></label>
                        <input type="text" className="form-control" name="registration" id="registration" placeholder="enter registration number" title="enter your phone number if any." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="mobile"><h4>Years of Existence</h4></label>
                        <input type="text" className="form-control" name="existence" id="existence" placeholder="Years of Existence" title="enter your Plate Number" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="address"><h4>Address</h4></label>
                        <input type="text" className="form-control" name="address" id="address" placeholder="address" title="enter your adress" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="membership"><h4>Membership</h4></label>
                        <input type="text" className="form-control" id="membership" placeholder="membership" title="enter your membership" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="status"><h4>Status</h4></label>
                        <input type="text" className="form-control" id="status" placeholder="status" title="status" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email"><h4>Email</h4></label>
                        <input type="text" className="form-control" id="email" placeholder="email" title="enter your email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone"><h4>Phone</h4></label>
                        <input type="text" className="form-control" id="phone" placeholder="phone" title="enter Phone Number" />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password"><h4>Password</h4></label>
                        <input type="password" className="form-control" id="password" placeholder="password" title="enter password" />
                    </div>
                        <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password"><h4>Confirm Password</h4></label>
                        <input type="password" className="form-control" id="password" placeholder="password" title="enter password" />
                      </div>
                    </div>
                      
                    </div>
           
                    
                    <div className="form-group">
                      <div className="col-xs-12">
                        <br />
                        <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign" /> Register</button>
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
  


export default RegiserSacco;