import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Typography } from '@material-ui/core';
import BlotFormatter from 'quill-blot-formatter';
import { ImageDrop } from 'quill-image-drop-module';
import Divider from '@material-ui/core/Divider';
import formatStringToHtml from '../../../util/stringToHtml';
import PropTypes from 'prop-types';
import { execRole } from '../../../types';

const HtmlEditor = props => {

  Quill.register({ 'modules/blotFormatter': BlotFormatter }, true);
  Quill.register({ 'modules/imageDrop': ImageDrop }, true);

  const modules = {
    blotFormatter: {
      overlay: {
        style: {
          border: '2px solid red',
        }
      }
    },
    imageDrop: true,
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'direction': 'rtl' }],
      ['clean'],
    ],
  };

  const getHtmlString = () => {
    const htmlString = props.value || '';

    return formatStringToHtml(htmlString, props.execRoles);
  };

  return (
    <>
      {props.showPreview ?
        <>
          <h2>Preview</h2>
          <Divider />
          <Typography dangerouslySetInnerHTML={{ __html: getHtmlString() }} />
          <Divider />
          <h2>Pure HTML</h2>
          {props.value}
          <Divider />
        </>
        :
        <ReactQuill
          theme="snow"
          value={props.value}
          modules={modules}
          onChange={props.onChange}
        />
      }
    </>
  );
};

HtmlEditor.propTypes = {
  value: PropTypes.string,
  execRoles: PropTypes.arrayOf(execRole),
  onChange: PropTypes.func,
  showPreview: PropTypes.bool
};

export default HtmlEditor;