import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Task.css';
//import { auth, database, tasks } from "../firebase";

class Task extends React.PureComponent {
    
    state = {

    }
    render() {
    
      console.log("Task"+this.props.title+" render"); 

        return (
          <React.Fragment>
            <tr className="one-task">
              <td className='cell'><NavLink to={"/task/"+this.props.id} className="">{this.props.title}</NavLink> </td> 
              <td className='cell'>{this.props.subject}</td> 
              <td className='cell'>{this.props.form}</td>             
            </tr>
            </React.Fragment>
        );
    } 
}

export default Task;   