export const UPDATE_PAGES = 'UPDATE_PAGES';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const SET_PAGES_LOADING = 'SET_PAGES_LOADING';

export const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    payload: page
  };
};

export const updatePages = pages => {
  return {
    type: UPDATE_PAGES,
    payload: pages
  };
};

export const setPagesLoading = loadingState => {
  return {
    type: SET_PAGES_LOADING,
    payload: loadingState
  };
};
