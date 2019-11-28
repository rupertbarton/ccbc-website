import React, { useState, useEffect } from 'react';
import ModifyContent from './ModifyContent';
import LoadingSpinner from '../../common/LoadingSpinner';

const ModifyContentPage = props => {
  const [hasFetchingStarted, setHasFethcingStarted] = useState(false)

  useEffect(() => {
    if (Object.keys(props.pages).length === 0) {
    props.fetchPages();
    }
    if (Object.keys(props.execRoles).length === 0) {
      props.fetchExec();
    }
    setHasFethcingStarted(true)
  }, []);

  return (
    <>
      {props.isPagesLoading || props.isExecLoading || !hasFetchingStarted ? <LoadingSpinner /> : <ModifyContent {...props} />}
    </>
  );
};

export default ModifyContentPage;