import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Restore, ClearAllRounded } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

export default function IconLabelButtons({
  applyFilter,
  resetFilter,
  clearFilter,
  disabled
}) {
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={resetFilter}
        disabled={disabled}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Reset
        <Restore className={classes.rightIcon} />
      </Button>
      <Button
        onClick={applyFilter}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Apply
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button
        onClick={clearFilter}
        variant="contained"
        color="default"
        className={classes.button}
      >
        Clear
        <ClearAllRounded className={classes.rightIcon} />
      </Button>
    </div>
  );
}
