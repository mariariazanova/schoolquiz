import React from 'react';
import PropTypes from 'prop-types';
import { Switch,Route } from 'react-router-dom';

import Page_Main from './Page_Main';
import Page_Tasks from './Page_Tasks';
import Page_Task from './Page_Task';
import Page_Useful from './Page_Useful';
import Page_Checklogin from './Page_Checklogin';
import Page_Createtask from './Page_Createtask';
import Login from './Login';


import './PagesRouter.css';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div className="main">
      
        <Route path="/" exact component={Page_Main} />
        <Route path="/tasks" component={Page_Tasks} />
        <Route path="/task/:taskid" component={Page_Task} />
        <Route path="/useful" component={Page_Useful} />
        <Route path="/createtask" component={Page_Createtask} />
        <Route path="/checklogin" component={Page_Checklogin} />
        <Route path="/login" component={Login} />
        
      
      </div>
    );
    
  }

}
    
export default PagesRouter;