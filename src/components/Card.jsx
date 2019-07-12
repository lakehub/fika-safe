import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AddSacco from './AddSacco.jsx';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 700,
    height: 500,
    justify: 'center'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    maxWidth: 500,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.root}>
        <AddSacco />
      </div>
    </Card>
  );
}
