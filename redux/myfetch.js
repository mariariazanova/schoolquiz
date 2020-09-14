import { SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    EMAIL_NOT_VERIFIED,
    SIGNOUT_SUCCESS,
    SIGNOUT_ERROR,
    RESET_SUCCESS,
    RESET_ERROR  } from "./actionTypesAC";

import firebase from "../firebase";

// Signing up with Firebase
export const signup = (email, password) => async dispatch => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(dataBeforeEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          user.sendEmailVerification();
        });
      })
      .then(dataAfterEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user.emailVerified) {
            // Email is verified
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                "Ваш аккаунт создан! Проверьте свою электронную почту."
            });
          } else {
            // Email is not verified
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                "Что-то пошло не так, ваш аккаунт не создан. Попробуйте снова."
            });
          }
        });
      })
      .catch(function(error) {
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            "Что-то пошло не так, ваш аккаунт не создан. Попробуйте снова."
        });
      });
  } catch (err) {
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Что-то пошло не так, ваш аккаунт не создан. Попробуйте снова."
    });
  }
};

// Signing in with Firebase
export const signin = (email, password, callback) => async dispatch => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          dispatch({ type: SIGNIN_SUCCESS });
          callback();
        })
        .catch(() => {
          dispatch({
            type: SIGNIN_ERROR,
            payload: "Неверный логин или пароль"
          });
        });
    } catch (err) {
      dispatch({ type: SIGNIN_ERROR, payload: "Неверный логин или пароль" });
    }
  };

  // Signing out with Firebase
export const signout = () => async dispatch => {
    try {
     
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: SIGNOUT_SUCCESS });
        })
        .catch(() => {
          
          dispatch({
            type: SIGNOUT_ERROR,
            payload: "Произошла ошибка, вы не смогли выйти. Попробуйте еще раз."
          });
        });
    } catch (err) {
      
      dispatch({
        type: SIGNOUT_ERROR,
        payload: "Произошла ошибка, вы не смогли выйти. Попробуйте еще раз."
      });
    }
  };
  
  // Reset password with Firebase
  export const resetPassword = email => async dispatch => {
    try {
     
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() =>
          dispatch({
            type: RESET_SUCCESS,
            payload:
              "Проверьте свою электронную почту. Мы отправили вам ссылку для сброса пароля."
          })
        )
        .catch(() => {
          
          dispatch({
            type: RESET_ERROR,
            payload:
              "Что-то пошло не так, мы не смогли отправить вам письмо. Попробуйте еще раз."
          });
        });
    } catch (err) {
      
      dispatch({ type: RESET_ERROR, payload: err });
    }
  };