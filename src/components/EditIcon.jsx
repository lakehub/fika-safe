import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import EditIcon from '@material-ui/icons/Edit';
import { Tooltip, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon: {
    margin: theme.spacing(2),
    fontSize: 20
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800]
    }
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title="Edit">
        <IconButton aria-label="Edit">
          <EditIcon className={classes.icon} color="primary" />
        </IconButton>
      </Tooltip>
    </div>
  );
}
