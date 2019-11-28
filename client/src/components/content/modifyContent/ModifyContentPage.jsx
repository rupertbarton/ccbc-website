import React, { useState, useEffect } from 'react';
import ModifyContent from './ModifyContent';
import LoadingSpinner from '../../common/LoadingSpinner';
import PropTypes from 'prop-types';

const ModifyContentPage = props => {
  const [hasFetchingStarted, setHasFethcingStarted] = useState(false);

  useEffect(() => {
    if (Object.keys(props.pages).length === 0) {
      props.fetchPages();
    }
    if (Object.keys(props.execRoles).length === 0) {
      props.fetchExec();
    }
    setHasFethcingStarted(true);
  }, []);

  return (
    <>
      {props.isPagesLoading || props.isExecLoading || !hasFetchingStarted ? <LoadingSpinner /> : <ModifyContent {...props} />}
    </>
  );
};

ModifyContentPage.propTypes = {
  pages: PropTypes.objectOf(
    PropTypes.objectOf({
      content: PropTypes.string,
      order: PropTypes.number
    })
  ),
  fetchPages: PropTypes.func,
  execRoles: PropTypes.arrayOf(PropTypes.objectOf({
    displayNames: PropTypes.arrayOf(PropTypes.string),
    userIds: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    order: PropTypes.number,
    isCaptain: PropTypes.bool
  })),
  fetchExec: PropTypes.func,
  isExecLoading: PropTypes.bool,
  isPagesLoading: PropTypes.bool
};

export default ModifyContentPage;