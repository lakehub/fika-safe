import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { TextField, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function NativeSelects({ status, onChangeStatus }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Status
        </InputLabel>
        <NativeSelect
          value={status}
          onChange={onChangeStatus}
          input={<Input name="Status" id="age-native-label-placeholder" />}
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
          <option value="Deactivated">Deactivated</option>
        </NativeSelect>
        <FormHelperText>filter by status</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Status
        </InputLabel>
        <NativeSelect
          value={status}
          onChange={onChangeStatus}
          input={<Input name="Status" id="age-native-label-placeholder" />}
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
          <option value="Deactivated">Deactivated</option>
        </NativeSelect>
        <FormHelperText>filter by status</FormHelperText>
      </FormControl>
    </div>
  );
}
