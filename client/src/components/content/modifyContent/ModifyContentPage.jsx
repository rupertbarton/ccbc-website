import React, { useState, useEffect } from 'react';
import ModifyContent from './ModifyContent';
import LoadingSpinner from '../../common/LoadingSpinner';

const ModifyContentPage = props => {
  useEffect(() => {
    if (Object.keys(props.pages).length === 0) {
    props.fetchPages();
    }
    if (Object.keys(props.execRoles).length === 0) {
      props.fetchExec();
    }
  }, []);

  return (
    <>
      {props.isPagesLoading ? <LoadingSpinner /> : <ModifyContent {...props} />}
    </>
  );
};

export default ModifyContentPage;