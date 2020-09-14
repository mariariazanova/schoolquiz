import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, BrowserRouter, Route  } from 'react-router-dom'
import Login from '../pages/Login';

import './Header.css';
import img from '../images/logo.png';




class Header extends React.Component {

    static propTypes = {
        
    };

    state = {
     
      showForm: false
    }

    showRegForm = (EO) => {
       
     
     this.setState ({showForm: true})

    } 
    //render(){
    // if (this.state.showRegForm) {
    //   return <Redirect to="/login" />
    //}
  
  
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
              Зарегистрироваться
              </div>
             
              <div className="">Войти</div>
            </div> 
            </BrowserRouter>
          </div>
        </div>
        {
        (this.state.showForm)
        ? <div>
         
           <div className="new_form">
             <h1>Форма обратной связи:</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Введите свой email:</label>
                <input type="email" className="form-control"
                  id="email"
                  onChange={this.props.onEmailSignUpChangeAction}
                  aria-describedby="emailHelp"
                  value={this.props.emailSignUp}
                  placeholder="aaaa@mail.ru" />
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Введите свое имя:</label>
                <input type="password" className="form-control"
                  id="password" value={this.props.passwordSignUp}
                  onChange={this.props.onPasswordSignUpChangeAction}
                  placeholder="abc123" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputRequire">Что вы хотите нам сказать:</label>
                <textarea rows="10" cols="45" name="text" className="form-control"
                  id="password" value={this.props.passwordSignUp}
                  onChange={this.props.onPasswordSignUpChangeAction}
                  placeholder="abc123" />
              </div>
            <button type="submit" className="btn-submit">Отправить</button>    
            </form>
          </div> 
          </div> 
          : null
         }
       
        
      </React.Fragment>              
              
      );  
    }
  
  }
  
  export default Header;