import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import queryStrings from 'query-string';

import FilterPaper from './FilterPaper.jsx';

class SaccoFilter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const parsedData = queryStrings.parse(this.props.initFilter.search);
    this.state = {
      status: '',
      dateLte: '2019-10-10', // oldDate
      dateGte: '2019-10-24', // newDate
      changed: false
    };

    console.log(parsedData);

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDateGte = this.onChangeDateGte.bind(this);
    this.onChangeDateLte = this.onChangeDateLte.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
      changed: true
    });
  }

  onChangeDateGte(e) {
    const range = e.target.value;
    // Regex date validation
    // if (range.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
    this.setState({
      dateGte: range,
      changed: true
    });
    // }
  }

  onChangeDateLte(e) {
    const range = e.target.value;
    // regex date validation
    // if (range.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
    this.setState({
      dateLte: range,
      changed: true
    });
    // }
  }

  clearFilter() {
    // reset the all filter attributes to an empty object
    this.props.setFilter({});
  }

  applyFilter() {
    const { status, dateLte, dateGte } = this.state;
    const filter = {};
    if (status) filter.status = status;
    if (dateGte) filter.dateGte = dateGte;
    if (dateLte) filter.dateLte = dateLte;
    this.props.setFilter(filter);
  }

  // reset the filter their initial state
  resetFilter() {
    this.setState({
      status: this.props.status || '',
      dateGte: this.props.dateGte || '',
      dateLte: this.props.dateLte || '',
      changed: false
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props)
      this.setState({
        status: nextProps.status || '',
        dateGte: nextProps.dateGte || '',
        dateLte: nextProps.dateLte || '',
        changed: false
      });
  }

  render() {
    // destructuring the props to avoiding theeslint yelling staff kinda sacks
    // camelCase manenos
    const { status, dateLte, dateGte } = this.state;
    return (
      <div>
        <FilterPaper
          status={status}
          dateLte={dateLte}
          dateGte={dateGte}
          onChangeDateGte={this.onChangeDateGte}
          onChangeDateLte={this.onChangeDateLte}
          onChangeStatus={this.onChangeStatus}
          applyFilter={this.applyFilter}
          resetFilter={this.resetFilter}
          clearFilter={this.clearFilter}
          disabled={!this.state.changed}
        />
      </div>
    );
  }
}
// prop validations
// IssueFilter.propTypes = {
//   setFilter: PropTypes.func.isRequired
// };

export default SaccoFilter;
