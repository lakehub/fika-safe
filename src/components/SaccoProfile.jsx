import React, { Component } from 'react'

class SaccoProfile extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-9">

              <h2 style={{ textAlign: "center" }}><strong>Obwollo Sacco</strong></h2>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">User info</h4>
                </div>
                <div className="panel-body">
                  <table className="table profile__table">
                    <tbody>
                      <tr>
                        <th><strong>Location</strong></th>
                        <td>Kisumu</td>
                      </tr>
                      <tr>
                        <th><strong>Sacco name</strong></th>
                        <td>Obwollo Sacco</td>
                      </tr>
                      <tr>
                        <th><strong>Registration Number</strong></th>
                        <td>NXF3T63BNBD</td>
                      </tr>
                      <tr>
                        <th><strong>Member since</strong></th>
                        <td>Jan 01, 2016</td>
                      </tr>
                      <tr>
                        <th><strong>Members</strong></th>
                        <td>145</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>


              <p>
                <a href="#" className=" btn btn-lg btn-block btn-info" data-toggle="modal" data-target="#profile__contact-form">
                  Edit
                    </a>
              </p>

            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default SaccoProfile