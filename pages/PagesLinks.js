import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {


  onUnload = e => { // the method that will be used for both add and remove event
    e.preventDefault();
    e.returnValue = '';
 }

 componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload);
 }

 componentWillUnmount() {
     window.removeEventListener("beforeunload", this.onUnload);
 }
  
          
  render() {

    return (
      <div className="navbar">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/tasks" className="PageLink" activeClassName="ActivePageLink">Тесты</NavLink>
        {/*<NavLink to="/classes" className="PageLink" activeClassName="ActivePageLink">Классы</NavLink>*/}
        <NavLink to="/useful" className="PageLink" activeClassName="ActivePageLink">Полезная информация</NavLink>
        <NavLink to="/checklogin" className="PageLink" activeClassName="ActivePageLink">Создать свой тест</NavLink>
        <NavLink to="/login" className="PageLink" activeClassName="ActivePageLink">Зарегистрироваться</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;