import firebase, {functions} from './firebaseApp';

let db = firebase.firestore();

export const fetchMembers = () => {
  return db.collection('users').where('isMember', '==', true).get().then(snapshot => {
    let members = [];
    snapshot.forEach(doc => {
      members.push({ ...doc.data(), id: doc.id });
    });
    return members;
  });
};

export const fetchExec = () => {
  return db.collection('roles').get().then(snapshot => {
    let exec = [];
    snapshot.forEach(doc => {
      exec.push({ ...doc.data(), id: doc.id });
    });
    return exec;
  });
};

export const updateExecRoles = (changes) => {
  return functions.httpsCallable('auth-updateExecRoles')(changes)
};