import React from 'react';
import PropTypes from 'prop-types';
import { Switch,Route } from 'react-router-dom';

import Page_Main from './Page_Main';
import Page_Subjects from './Page_Subjects';
import Page_Checklogin from './Page_Checklogin';
import Page_Createtask from './Page_Createtask';
import Login from './Login';


import './PagesRouter.css';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div className="main">
        <Switch>
        <Route path="/" exact component={Page_Main} />
        <Route path="/subjects" component={Page_Subjects} />
        <Route path="/createtask" component={Page_Createtask} />
        <Route path="/checklogin" component={Page_Checklogin} />
        <Route path="/login" component={Login} />
        {/*<Route path="/clients" component={Page_Clients} />
        <Route path="/client/:clid" component={Page_Client} />*/}
        </Switch>
      </div>
    );
    
  }

}
    
export default PagesRouter;