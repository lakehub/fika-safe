import React from 'react';
import SmsTable from './SmsTable.jsx';
import SortDropDown from './SortDropDown.jsx'

class SmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { smsLogs: [] };
  }

  render() {
    return (
      <div>
        <SortDropDown />
        <SmsTable smsLogs={ this.state.smsLogs } />
      </div>
    );
  }
}

export default SmsList;