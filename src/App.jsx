import { React } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { sidebarRoutes, appRoutes } from './routes';

const App = () => (
  <Router>
    <div className="d-flex" id="wrapper">
      <div className="bg-dark border-right" id="sidebar-wrapper">
        <div className="sidebar-heading"> 💧 Waterbase</div>
        <div className="list-group list-group-flush">
          {sidebarRoutes.map((route) => (
            <NavLink
              to={route.to}
              exact
              activeClassName="bg-secondary"
              className="list-group-item list-group-item-action"
            >
              <i className={route.icon} /> {` ${route.name}`}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="page-content-wrapper">
        <Switch>
          {appRoutes.map((route) => (
            <Route exact={route.exact} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
