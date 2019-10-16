import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AutoSelect from '../../common/AutoSelect'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    overflow: "visible",
    margin: theme.spacing(1),
    width: "100%",
    maxWidth: 420
  },
}));

const ModifyExecComponent = props => {
  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState(
    props.execRole.users ?
      props.execRole.users.map(user => ({ label: user.displayName, value: user.userId }))
      :
      null);

  const handleChange = value => {
    setSelectedUsers(value);
    props.onChange(props.execRole.id, value ? value.map(user => user.value) : [])
  };

  return (
    <Card className={classes.card} raised>
      <CardContent>
        <Typography variant="h5">{props.execRole.name}:</Typography>
        <AutoSelect items={props.members} value={selectedUsers} onChange={handleChange} placeholder="Please select member" />
      </CardContent>
    </Card>
  );
};

export default ModifyExecComponent;