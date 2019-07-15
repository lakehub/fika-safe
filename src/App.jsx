import ReactDOM from 'react-dom';
import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from "./components/Registration.jsx"
// importing oue components
import SaccoList from './components/SaccoList.jsx';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx'

// import Footer from "./components/Footer.jsx";

const App = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      {/* <Footer/> */}
    </>
  );
};

const RouteApp = () => {
  return (
    // react-router
    <Router>
      <Switch>
        <App>
          {/* children */}
          <Route path="/login" exact component={Login} />
          <Route path="/saccos" exact component={SaccoList} />
          <Route path="/register" exact component={Registration} />

        </App>
      </Switch>
    </Router>
  );
};

const contentNode = document.getElementById('contents');

ReactDOM.render(<RouteApp />, contentNode);
// this is for tracking any changes in our files so that HMR can rerender the new data to the web
if (module.hot) {
  module.hot.accept();
}
