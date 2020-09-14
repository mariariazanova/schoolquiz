import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDfx7_FWPGZQRqLVkFmrcjFNOAuBxxnBWw",
    authDomain: "schoolquiz-2020.firebaseapp.com",
    databaseURL: "https://schoolquiz-2020.firebaseio.com",
    projectId: "schoolquiz-2020",
    storageBucket: "schoolquiz-2020.appspot.com",
    messagingSenderId: "742652265241",
    appId: "1:742652265241:web:52f37013016fbe030dbb88",
    measurementId: "G-9Z0PNWHHBB"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();

export default firebase;