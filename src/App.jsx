import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faEllipsisH,
  faTrash,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';

// importing the modularized files from other directories
import SaccoList from './components/SaccoList.jsx';
import NavBar from './components/NavBar.jsx';

// A LIBRARY TO REFERENCE ALL YOUR FONT AWESOME ICONS IN YOUR ENTIRE PROJECT
library.add(fab, faCheckSquare, faCoffee, faEllipsisH, faTrash, faPlusCircle);

// some stateless components
// const NoMatch = () => <p>There is no match of the queried url string</p>;
// This is our main component that will route all our apps

const App = ({ children }) => (
  <div>
    <NavBar />
    <div className="container-fluid">{children}</div>
  </div>
);

// this routes all the componenst in the front end staff
const RouteApp = () => (
  <Router>
    <div>
      <Redirect from="/" to="/saccos" />
      {/* <Nav /> */}
      <Switch>
        <App>
          {/* injecting a router to issuefilter with the withROuter methods */}
          <Route path="/saccos" exact component={SaccoList} />
          {/* <Route path="/issues/:id" exact strict component={IssueEdit} /> */}
          {/* <Route path="*" component={NoMatch} /> */}
        </App>
      </Switch>
    </div>
  </Router>
);

const contentNode = document.getElementById('contents');

ReactDOM.render(<RouteApp />, contentNode);
// this is for tracking any changes in our files so that HMR can rerender the new data to the web
if (module.hot) {
  module.hot.accept();
}
