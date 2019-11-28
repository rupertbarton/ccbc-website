import firebase, { functions } from './firebaseApp';
import { updateMembers, updateExec, setExecLoading, setMembersLoading } from '../actions/users';

let db = firebase.firestore();

export const fetchMembers = () => dispatch => {
  dispatch(setMembersLoading(true));
  return db.collection('users').where('isMember', '==', true).get().then(snapshot => {
    let members = [];
    snapshot.forEach(doc => {
      members.push({ ...doc.data(), id: doc.id });
    });
    return members;
  })
    .then(members => {
      dispatch(updateMembers(members));
      dispatch(setMembersLoading(false));
    });
};

export const fetchExec = () => dispatch => {
  dispatch(setExecLoading(true));
  return db.collection('roles').get().then(snapshot => {
    let exec = [];
    snapshot.forEach(doc => {
      exec.push({ ...doc.data(), id: doc.id });
    });
    return exec;
  })
    .then(users => {
      dispatch(updateExec(users));
      dispatch(setExecLoading(false));
    });
};

export const updateExecRoles = changes => {
  return functions.httpsCallable('auth-updateExecRoles')(changes);
};