import { auth } from "firebase/app";
import "firebase/auth";
import { updateCurrentUser } from '../actions/auth'

export const facebookLogin = () => dispatch => {
  const provider = new auth.FacebookAuthProvider();
  return auth().signInWithPopup(provider).then((result) => {
    dispatch(updateCurrentUser(auth().currentUser))
  })
  .catch((err) => {
    console.error(err)
  })
};

export const logout = () => dispatch => {
  return auth().signOut().then(() => {
    dispatch(updateCurrentUser(null))
  })
  .catch((err) => {
  })
};

// import axios from 'axios';
  // export const microsoftLogin = () => dispatch => {
      //   const provider = new auth.OAuthProvider('microsoft.com');
      //   provider.setCustomParameters({
      //     prompt: 'select_account',
      //     domain_hint: 'durham.ac.uk',
      //   });
      //   return auth().signInWithPopup(provider).then((result) => {
      //     console.log(result)
      //     dispatch(updateCurrentUser(auth().currentUser))
      //     getMicrosoftProfilePicture(result.credential.accessToken)
      //   })
      //   .catch((err) => {
      //   })
      // };
      
      // const getMicrosoftProfilePicture = (bearerToken) => {
      // axios.get("https://graph.microsoft.com/v1.0/me/photo", {headers: {Authorization: bearerToken}}).then((result) => {
      //   console.log("success")
      //   console.log(result)
      // })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      // }