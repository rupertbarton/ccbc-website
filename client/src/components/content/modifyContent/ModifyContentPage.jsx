import React, { useState, useEffect } from 'react';
import ModifyContent from './ModifyContent';
import LoadingSpinner from '../../common/LoadingSpinner';

const ModifyContentPage = props => {
  useEffect(() => {
    props.fetchPages();
  }, []);

  return (
    <>
      {props.isPagesLoading ? <LoadingSpinner /> : <ModifyContent {...props} />}
    </>
  );
};

export default ModifyContentPage;