import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard';
import DemoPage from './components/DemoPage';

ReactDOM.render(
  <React.StrictMode>
	    <Router>
      <Switch>
        <Route path="/machines">
					<App>
						<DemoPage pageName="Machines" />
					</App>
        </Route>
        <Route path="/locations">
					<App>
						<DemoPage pageName="Locations" />
					</App>
        </Route>
        <Route path="/products">
					<App>
						<DemoPage pageName="Products" />
					</App>
        </Route>
        <Route path="/media">
					<App>
						<DemoPage pageName="Media" />
					</App>
        </Route>
        <Route path="/user-management">
					<App>
						<DemoPage pageName="User Management" />
					</App>
        </Route>
        <Route path="/logout">
					<App>
						<DemoPage pageName="Log Out" />
					</App>
        </Route>
        <Route path="/">
					<App>
						<Dashboard />
					</App>
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
reportWebVitals();
