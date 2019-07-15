import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grid: {
    width: '60%'
  },
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function MaterialUIPickers({
  onChangeDateLte,
  onChangeDateGte,
  dateLte,
  dateGte
}) {
  const classes = useStyles();
  return (
    <>
      <Typography component="p">Date:</Typography>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          // value={dateGte}
          onChange={onChangeDateGte}
          label="Start"
          type="date"
          defaultValue={dateGte}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        &nbsp; &nbsp;
        <TextField
          id="date"
          // value={dateGte}
          onChange={onChangeDateLte}
          label="End"
          type="date"
          defaultValue={dateLte}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    </>
  );
}
