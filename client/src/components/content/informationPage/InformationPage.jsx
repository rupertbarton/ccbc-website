import React, { useEffect } from 'react';
import * as R from 'ramda';
import { Typography } from '@material-ui/core';
import LoadingSpinner from '../../common/LoadingSpinner';
import formatStringToHtml from '../../../util/stringToHtml';
import PropTypes from 'prop-types';
import { pages, route, execRole } from '../../../types';

const InformationPage = props => {

  const { fetchPages, fetchExec, pages, execRoles } = props;
  useEffect(() => {
    if (Object.keys(pages).length === 0) {
      fetchPages();
    }
    if (Object.keys(execRoles).length === 0) {
      fetchExec();
    }
  }, [fetchPages, fetchExec, pages, execRoles]);

  const getHtmlString = () => {
    const htmlString = R.path([props.route.name, 'content'], props.pages) || '';
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