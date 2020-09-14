import React from 'react';
import requireAuth from "../components/hoc/requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../redux/myfetch";
import Form from "../components/Form";

import './Page_Createtask.css';



const Page_Createtask = ({ signout }) => {
  
  
    return (
    <React.Fragment> 
      <div className="create-task-page">
      <div className="create-task-page-block">    
        <div className="create-task-page_inner">
          <Form />
        </div>
      </div>
      <div className="aside-right">
        <p>Ваш аккаунт</p>
        <button className="btn-switch" onClick={() => signout()}>
        Выйти
      </button>
      </div>
      </div>
           
    </React.Fragment>   
    );
    
  

};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signout())
  };
}
    
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ), requireAuth
)(Page_Createtask);