import firebase from './firebaseApp';
import toCamelCase from '../util/toCamelCase';
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

export const setExecRole = (role, user) => {
  let batch = db.batch();
  batch.set(db.collection('roles').doc(toCamelCase(role.name), role));
  batch.update(db.collection('users').doc(user.id, user));
  if (role.oldName) {
    batch.delete(db.collection('role').doc(toCamelCase(role.oldName)));
  }
  return batch.commit();
};