import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

// import PropTypes from 'prop-types';

import SaccoTable from './SaccoTable.jsx';
import SaccoFilter from './SaccoFilter.jsx';

export default class SaccoList extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };

    // binding of methods
    this.loadData = this.loadData.bind(this);
    this.deleteSacco = this.deleteSacco.bind(this);
  }

  // create methods here..
  // lifecycles
  componentDidMount() {
    this.loadData();
  }

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

  // deleteSacco
  deleteSacco(id) {
    console.log(id);
    fetch(`/api/saccos/${id}`, { method: 'DELETE' })
      .then(response => {
        response.json();
        // alert(response.message);
        this.loadData();
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  // this function loads the load data from the database
  loadData() {
    // axios is so messsy
    fetch(`/api/saccos${this.props.location.search}`)
      .then(response => response.json())
      .then(data => {
        // const newState = this.state.data.slice();
        // const newData = newState.concat(data);

        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>

      <SaccoFilter
          initFilter={this.props.location}
          setFilter={this.setFilter}
        />
      <div>
        {/* we can passinprops */}
        <SaccoTable data={this.state.data} deleteSacco={this.deleteSacco} />
        
      </div>
      </div>
    );
  }
}
