import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import LoadingSpinner from '../../common/LoadingSpinner';
import fp from 'lodash/fp';
import formatStringToHtml from '../../../util/stringToHtml';
import PropTypes from 'prop-types';
import { pages, route, execRole } from '../../../types';

const InformationPage = props => {
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
    )(props.pages) || '';

    return formatStringToHtml(htmlString, props.execRoles);
  };

  return (
    props.isPagesLoading || props.isExecLoading ?
      <LoadingSpinner />
      :
      <>
        <Typography dangerouslySetInnerHTML={{
          __html: getHtmlString()
        }} />
      </>
  );
};

InformationPage.propTypes = {
  pages,
  route,
  fetchExec: PropTypes.func,
  fetchPages: PropTypes.func,
  isPagesLoading: PropTypes.bool,
  isExecLoading: PropTypes.bool,
  execRoles: PropTypes.arrayOf(execRole),
};

export default InformationPage;