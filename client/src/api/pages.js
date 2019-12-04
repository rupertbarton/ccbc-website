import firebase from './firebaseApp';
import { updatePages, setPagesLoading, updatePage } from '../actions/pages';

let db = firebase.firestore();

export const fetchPages = () => dispatch => {
  dispatch(setPagesLoading(true));
  return db.collection('pages').get().then(snapshot => {
    let pages = {};
    snapshot.forEach(doc => {
      pages = { ...pages, [doc.id]: doc.data() };
    });
    return pages;
  })
    .then(pages => {
      dispatch(updatePages(pages));
      dispatch(setPagesLoading(false));
    });
};

export const fetchPage = pageName => dispatch => {
  dispatch(setPagesLoading(true));
  return db.collection('pages').doc(pageName).get().then(doc => {
    let page = { [doc.id]: doc.data() };
    return page;
  })
    .then(page => {
      dispatch(updatePage(page));
      dispatch(setPagesLoading(false));
    });
};

export const savePage = page => {
  return db.collection('pages').doc(page.id).update({ content: page.content });
};

export const saveMultiplePages = pages => {
  const arrayOfPageUpdatePromises = Object.keys(pages).map(id => {
    if (pages[id].changed) {
      let currentPage = { id, content: pages[id].content };
      return savePage(currentPage);
    }
  });
  return Promise.all(arrayOfPageUpdatePromises);
};