import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import LoadingSpinner from '../../common/LoadingSpinner';
import fp from 'lodash/fp';
import formatStringToHtml from '../../../util/stringToHtml';
import PropTypes from 'prop-types';

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
  pages: PropTypes.objectOf(
    PropTypes.objectOf({
      content: PropTypes.string,
      order: PropTypes.number
    })
  ),
  route: PropTypes.objectOf({
    name: PropTypes.string,
    path: PropTypes.string,
    component: PropTypes.elementType,
    requiresMember: PropTypes.bool,
    requiresExec: PropTypes.bool,
    requiresCaptain: PropTypes.bool,
  }),
  fetchExec: PropTypes.func,
  fetchPages: PropTypes.func,
  isPagesLoading: PropTypes.bool,
  isExecLoading: PropTypes.bool,
  execRoles: PropTypes.arrayOf(PropTypes.objectOf({
    displayNames: PropTypes.arrayOf(PropTypes.string),
    userIds: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    order: PropTypes.number,
    isCaptain: PropTypes.bool
  })),
};

export default InformationPage;