import React, { Component } from 'react';
import 'whatwg-fetch';
import queryString from 'query-string';
import PropTypes from 'prop-types';


import SaccoTable from './SaccoTable.jsx';

export default class saccoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { saccos } = this.state;
    return (
      <div>
        <SaccoTable />
      </div>
    );
  }
}
// prop validations
