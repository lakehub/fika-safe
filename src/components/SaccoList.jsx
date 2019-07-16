import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

// import PropTypes from 'prop-types';

import SaccoTable from 'components/SaccoTable.jsx';
import SaccoFilter from 'components/Filter/SaccoFilter.jsx';

export default class SaccoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = { data: [], sortBy: 'name' };

    this.loadData = this.loadData.bind(this);
    this.deleteSacco = this.deleteSacco.bind(this);
    this.setFilter = this.setFilter.bind(this);
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
    const { history, location } = this.props;
    const dataQuery = queryString.stringify(query);
    console.log(dataQuery);
    history.push(`${location.pathname}?${dataQuery}`);
  }

  // sorting handler function
  handleSortChange(event) {
    this.setState({
      sortBy: event.target.value
    });
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
        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { data, sortBy } = this.state;
    const sortedData = data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

    return (
      <div>
        <SaccoFilter
          initFilter={this.props.location}
          setFilter={this.setFilter}
        />
        Sort by :
        <select value={sortBy} onChange={this.handleSortChange.bind(this)}>
          <option value="name">Name</option>
          <option value="address">Address</option>
          <option value="created">Created</option>
        </select>
        <div>
          {/* we can passinprops */}
          <SaccoTable data={sortedData} deleteSacco={this.deleteSacco} />
        </div>
      </div>
    );
  }
}

// SaccoList.propTypes = {
//   location: PropTypes.object.isRequired
// };
