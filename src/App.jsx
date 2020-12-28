import { React, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarText } from 'reactstrap';
import { sidebarRoutes, appRoutes } from './routes';

const App = () => {
  const sidebar = useRef();
  return (
    <Router>
      <div className="d-flex" ref={sidebar} id="wrapper">
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
        <div id="page-content-wrapper">
          <Navbar color="light" light expand="md" className="justify-content-lg-end">
            <NavbarToggler
              onClick={() => {
                if (!sidebar.current.classList.contains('toggled')) {
                  sidebar.current.classList.add('toggled');
                } else {
                  sidebar.current.classList.remove('toggled');
                }
              }}
            />
            <NavbarText>Simple Text</NavbarText>
          </Navbar>
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
};

export default App;
