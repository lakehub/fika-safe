import React from 'react';
import SmsTable from './SmsTable.jsx';

class SmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { smsLogs: [] };
  }

  render() {
    return (
      <div>
        <SmsTable smsLogs={ this.state.smsLogs } />
      </div>
    );
  }
}

export default SmsList;