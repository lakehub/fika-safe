import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { makeStyles } from '@material-ui/core/styles';

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
        <DeleteOutlinedIcon onClick={onClick} className={classes.icon} />
        {/* <DeleteForeverOutlinedIcon className={classes.icon} /> */}
      </Grid>
    </Grid>
  );
}
