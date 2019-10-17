import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Typography } from '@material-ui/core';

const HtmlEditor = (props) => {

  return (
    <>
    <ReactQuill value={props.value}
    onChange={props.onChange} />
    <h3>Preview:</h3>
    <Typography dangerouslySetInnerHTML={{__html: props.value}}></Typography>
  </>
  )
}

export default HtmlEditor