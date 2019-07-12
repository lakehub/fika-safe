import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import queryStrings from 'query-string';

class SaccoFilter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const parsed_data = queryStrings.parse(this.props.initFilter.search);
    this.state = {
      status: '',
      dateLte: '20', // oldDate
      dateGte: '4', // newDate
      changed: false
    };

    console.log(this.props.initFilter);

    console.log(parsed_data);

    this.onChangeStatus = this.onChangeStatus.bind(this);
    // this.onChangeEffortGte = this.onChangeEffortGte.bind(this);
    // this.onChangeEffortLte = this.onChangeEffortLte.bind(this);
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
    // requires oldDate validation regex wise
    if (range.match(/^\d*$/gm)) {
      this.setState({
        dateGte: range,
        changed: true
      });
    }
  }

  onChangeEffortLte(e) {
    const range = e.target.value;
    // requires newDate validation using regex
    if (range.match(/^\d*$/gm)) {
      this.setState({
        dateLte: range,
        changed: true
      });
    }
  }

  clearFilter() {
    this.props.setFilter({});
  }

  applyFilter() {
    const filter = {};
    if (this.state.status) filter.status = this.state.status;
    // if (this.state.effort_gte) filter.effort_gte = this.state.effort_gte;
    // if (this.state.effort_lte) filter.effort_lte = this.state.effort_lte;
    this.props.setFilter(filter);
  }

  // reset the filter their initial state
  resetFilter() {
    this.setState({
      status: this.props.status || '',
      effort_gte: this.props.dateGte || '',
      effort_lte: this.props.dateLte || '',
      changed: false
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props)
      this.setState({
        date: nextProps.status || '',
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
        Status:
        <select value={status} onChange={this.onChangeStatus}>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="InActive">InActive</option>
        </select>
        &nbsp;Date Created
        <input size={15} value={dateGte} onChange={this.onChangeDateGte} />
        &nbsp;-&nbsp;
        <input size={15} value={dateLte} onChange={this.onChangeDateLte} />
        <button onClick={this.applyFilter}>Apply</button>
        <button onClick={this.resetFilter} disabled={!this.state.changed}>
          Reset
        </button>
        <button onClick={this.clearFilter}>Clear</button>
      </div>
    );
  }
}
// prop validations
// IssueFilter.propTypes = {
//   setFilter: PropTypes.func.isRequired
// };

export default SaccoFilter;
