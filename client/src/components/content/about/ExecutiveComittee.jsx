import React from 'react';
import { Typography } from '@material-ui/core';
import squirrel from '../../../squirrel.jpg';

const ExecutiveCommittee = () => {
  return (
    <Typography>
      <>
        bla de bla de bla here&apos;s a squirrel -&gt;
        <img src={squirrel} alt="Smiley face" height="200px"/>
      </>
    </Typography>
  );
};

export default ExecutiveCommittee;