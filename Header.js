import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, BrowserRouter, Route  } from 'react-router-dom'
import Login from '../pages/Login';

import './Header.css';
import FormRequest from '../components/FormRequest';
import img from '../images/logo.png';




class Header extends React.Component {

    state = {
       showForm: false
    }

    showRegForm = (EO) => {
       this.setState ({showForm: true})
    } 
     
    render() {
    
      const navBarItemsList = this.props.navbar.map((item, index) => (
        <li key={index} className={"page-item"}>
          <a href="/#" className="page-link">{item}</a>
        </li>

            
      ));
      return (
      <React.Fragment>
        <div className="quiz">  
          <div className="header">
            <div className="logo">
              <img src={img} className="logo_img" />
            </div>
            <BrowserRouter>
            <div className="registration_block">
              <div className="" onClick={this.showRegForm}>               
              Форма обратной связи
              </div>
            </div> 
            </BrowserRouter>
          </div>
        </div>
        {
        (this.state.showForm)
        ? <FormRequest />
        : null
         }
      </React.Fragment>                  
      );  
    } 
  }
  
export default Header;