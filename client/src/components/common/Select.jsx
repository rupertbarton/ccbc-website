import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 320
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CustomSelect = props => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined"
      className={classes.formControl}>
      <InputLabel ref={inputLabel}>
        {props.label}
      </InputLabel>
      <Select
        value={props.value}
        labelWidth={labelWidth}
        onChange={props.onChange}
      >
        {props.items.map((item, index) => {
          return (
            <MenuItem key={index}
              value={item.id}>{item[props.name]}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;