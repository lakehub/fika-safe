import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 25
  }
}));

export default function DeleteIcon({ id, removeSacco }) {
  const classes = useStyles();
  //   handler fucntion
  const onClick = () => {
    removeSacco(id);
    console.log(id);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <Tooltip title="Delete">
          <IconButton aria-label="Edit" onClick={onClick}>
            <DeleteOutlinedIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
