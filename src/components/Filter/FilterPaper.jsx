import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, FormControl } from '@material-ui/core';

import FilterButton from 'components/Filter/FilterButton.jsx';
import Date from './Date.jsx';
import Status from './Status.jsx';

const useStyles = makeStyles(theme => ({
  grid: {
    width: '60%'
  },
  root: {
    padding: theme.spacing(3, 2),
    elevation: 10
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function FilterPaper({
  status,
  dateLte,
  dateGte,
  onChangeDateGte,
  onChangeDateLte,
  onChangeStatus,
  applyFilter,
  resetFilter,
  clearFilter,
  disabled
}) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h4">
          Filter
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl className={classes.formControl}>
              <Date
                dateLte={dateLte}
                dateGte={dateGte}
                onChangeDateGte={onChangeDateGte}
                onChangeDateLte={onChangeDateLte}
              />
              <Status status={status} onChangeStatus={onChangeStatus} />
              <FilterButton
                applyFilter={applyFilter}
                resetFilter={resetFilter}
                clearFilter={clearFilter}
                disabled={disabled}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
