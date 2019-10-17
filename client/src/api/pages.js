import firebase from './firebaseApp';
import {updatePages, setPagesLoading} from '../actions/pages'

let db = firebase.firestore();

export const fetchPages = () => dispatch => {
  dispatch(setPagesLoading(true))
  return db.collection('pages').get().then(snapshot => {
    let pages = {};
    snapshot.forEach(doc => {
      pages = {...pages, [doc.id]: doc.data() };
    });
    return pages;
  })
  .then((pages) => {
    dispatch(updatePages(pages))
    dispatch(setPagesLoading(false))
  })
};

export const savePage = (page) => {
  db.collection('pages').doc(page)
}