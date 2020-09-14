import React from "react";
import { connect } from 'react-redux';
import Page_Createtask from './Page_Createtask';
import Login from './Login';
import Loader from './Loader';

const Page_Checklogin = ({ auth }) => {
  
  return (
    <div>
      {!auth.isLoaded ? <Loader /> : !auth.isEmpty ? <Page_Createtask /> : <Login />}
      
    </div>
  );
};



function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Page_Checklogin);