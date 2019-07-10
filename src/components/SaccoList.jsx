import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

import SaccoTable from './SaccoTable.jsx';

export default class SaccoList extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  // create methods here..
  // lifecycles
  componentDidMount() {
    // axios is so messsy
    fetch(`/api/saccos`)
      .then(response => response.json())
      .then(data => {
        const newState = this.state.data.slice();
        const newData = newState.concat(data);

        this.setState({ data: newData });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {/* we can passinprops */}
        <SaccoTable data={this.state.data} />
      </div>
    );
  }
}
