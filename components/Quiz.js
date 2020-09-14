import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import './Quiz.css';
import './styles.css';

import Header from './Header';
import publicInfo from '../publicInfo.json';

import PagesLinks from '../pages/PagesLinks';
import PagesRouter from '../pages/PagesRouter';

// SETTING UP REDUX STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from '../redux/reducers.js';

// ENHANCING STORE WITH FIREBASE
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from '../firebase';

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))
    (createStore);

const store = createStoreWithFirebase(
    reducers, {}, applyMiddleware(reduxThunk)
  );

class Quiz extends React.Component {
    static propTypes = {
    };
    constructor(props) {
        super(props);
        
    this.state = {
       navbar: publicInfo.NavBarItems,
       main: publicInfo.Main,

    };
    } 
  
    
    render() {
    
           return ( 
            <React.Fragment> 
              <Provider store={store}>
              <React.Fragment>
                <Header navbar={this.state.navbar}
                        main={this.state.main}
                        
                /> 
                <BrowserRouter>
                    <div className="">
                    <PagesLinks />
                    
                    <PagesRouter />
                    </div>
                </BrowserRouter>
                </React.Fragment>
              </Provider>
            </React.Fragment> 
           ) 
        } 

    

}    

export default Quiz; 