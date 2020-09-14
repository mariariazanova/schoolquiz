import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className="navbar">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/subjects" className="PageLink" activeClassName="ActivePageLink">Предметы</NavLink>
        <NavLink to="/classes" className="PageLink" activeClassName="ActivePageLink">Классы</NavLink>
        <NavLink to="/useful" className="PageLink" activeClassName="ActivePageLink">Полезная информация</NavLink>
        <NavLink to="/checklogin" className="PageLink" activeClassName="ActivePageLink">Создать свой тест</NavLink>
        <NavLink to="/login" className="PageLink" activeClassName="ActivePageLink">Зарегистрироваться</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;