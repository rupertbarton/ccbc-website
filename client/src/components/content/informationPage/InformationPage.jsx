import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core';
import LoadingSpinner from '../../common/LoadingSpinner';
import fp from 'lodash/fp';
import formatStringToHtml from '../../../util/stringToHtml'

const InformationPage = (props) => {
  useEffect(() => {
    if (Object.keys(props.pages).length === 0) {
      props.fetchPages();
    }
    if (Object.keys(props.execRoles).length === 0) {
      props.fetchExec();
    }
  }, [props.fetchPages, props.fetchExec]);

  const getHtmlString = () => {
    const htmlString = fp.flow(fp.get(props.route.name),
      fp.get('content')
    )(props.pages) || ''

    return formatStringToHtml(htmlString, props.execRoles)
  }

  return (
    props.isPagesLoading || props.isExecLoading ?
      <LoadingSpinner />
      :
      <>
        <Typography dangerouslySetInnerHTML={{
          __html: getHtmlString()
        }} />
      </>
  )
}

export default InformationPage