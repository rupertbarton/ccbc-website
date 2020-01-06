import React, { useState, useEffect } from 'react';
import ModifyContent from './ModifyContent';
import LoadingSpinner from '../../common/LoadingSpinner';
import PropTypes from 'prop-types';
import { pages, execRole } from '../../../types';

const ModifyContentPage = props => {
  const [hasFetchingStarted, setHasFethcingStarted] = useState(false);

  const { pages, execRoles, fetchPages, fetchExec } = props;
  useEffect(() => {
    if (Object.keys(pages).length === 0) {
      fetchPages();
    }
    if (Object.keys(execRoles).length === 0) {
      fetchExec();
    }
    setHasFethcingStarted(true);
  }, [pages, execRoles, fetchPages, fetchExec]);

  return (
    <>
      {props.isPagesLoading || props.isExecLoading || !hasFetchingStarted ? <LoadingSpinner /> : <ModifyContent {...props} />}
    </>
  );
};

ModifyContentPage.propTypes = {
  pages,
  fetchPages: PropTypes.func,
  execRoles: PropTypes.arrayOf(execRole),
  fetchExec: PropTypes.func,
  isExecLoading: PropTypes.bool,
  isPagesLoading: PropTypes.bool
};

export default ModifyContentPage;