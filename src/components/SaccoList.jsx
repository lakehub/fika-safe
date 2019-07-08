import React, { Component } from 'react';
import 'whatwg-fetch';
import queryString from 'query-string';
import PropTypes from 'prop-types';

// cant get rid of the jsx extentions even though eslint keeps yelling at me....sorry reviewers am also too lazy to google
// import IssueFilter from './IssueFilter.jsx';
// import IssueTable from './IssueTable.jsx';
import SaccoTable from './SaccoTable.jsx';

export default class saccoList extends Component {
  // _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { saccos: [] };
    console.log(props);
    // console.log(this.props.location.pathname);
    console.log(this.state.saccos);
    // binding methods created in the class component
    this.createIssue = this.createIssue.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  // React Lifecycle methods
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.loadData();
    }
  }

  setFilter(query) {
    // very important to stringify the data
    const data_query = queryString.stringify(query);

    this.props.history.push(`${this.props.location.pathname}?${data_query}`);
  }

  //  THE CLIENT SIDE DELETE API
  deleteIssue(id) {
    console.log(id);
    fetch(`/api/issues/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          console.log(response);
          this.loadData();
        } else {
          alert('Failed to delete issue');
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  loadData() {
    fetch('/api/saccos')
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.setState({ issues: data.saccos });
          });
        } else {
          response.json().then(error => {
            alert(`Failed to fetch issues:${error.message}`);
          });
        }
      })
      .catch(err => {
        alert('Error in fetching data from server:', err);
      });
  }

  createIssue(newIssue) {
    fetch('/api/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue)
    })
      .then(response => {
        console.log(response);
        response
          .json()
          .then(updatedIssue => {
            console.log(updatedIssue);
            const newIssues = this.state.issues.concat(updatedIssue);
            this.setState({ issues: newIssues });
          })
          .catch(err => {
            alert(
              `The response from the server  has got some feelings: ${err.message}`
            );
          });
      })
      .catch(err => {
        alert(`Error in sending data to server: ${err.message}`);
      });
  }

  render() {
    const { saccos } = this.state;
    return (
      <div>
        {/* <Panel collapsible header="Filter"> */}
        {/* <IssueFilter
          initFilter={this.props.location}
          setFilter={this.setFilter}
        /> */}
        {/* </Panel> */}

        <SaccoTable  />

        {/* <IssueAdd createIssue={this.createIssue} /> */}
      </div>
    );
  }
}
// prop validations
