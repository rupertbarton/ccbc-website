import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core';
import LoadingSpinner from '../../common/LoadingSpinner';
import fp from 'lodash/fp';

const InformationPage = (props) => {
  useEffect(() => {
    if (Object.keys(props.pages).length === 0) {
      props.fetchPages();
    }
    if (Object.keys(props.execRoles).length === 0) {
      props.fetchExec();
    }
  }, [props.fetchPages, props.fetchExec]);

  return (
    props.isPagesLoading || props.isExecLoading ?
      <LoadingSpinner />
      :
      <>
        <Typography dangerouslySetInnerHTML={{
          __html: fp.flow(fp.get(props.route.name),
            fp.get('content')
          )(props.pages) || ''
        }} />
      </>
  )
}

export default InformationPage