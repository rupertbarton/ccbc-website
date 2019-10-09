import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';

const HelloWorld = (props) => {

  useEffect(() => {
    props.helloWorld()
  }, [])

  return (
    <Typography>
  {props.hello}

    </Typography>
  )
}

export default HelloWorld