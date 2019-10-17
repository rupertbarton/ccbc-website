export const UPDATE_PAGES = 'UPDATE_PAGES';
export const SET_PAGES_LOADING = 'SET_PAGES_LOADING';

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
