import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { FormControl } from '@material-ui/core';
import {
  Table,
  Input,
  FormHelperText,
  FormControl,
  InputLabel,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
// import Head from './SaccoFilter.jsx/index.js';

import SaccoRow from './SaccoRow.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

export default function SaccoTable({ data, deleteSacco }) {
  const classes = useStyles();
  // console.log(data.data[0]);
  const Saccorow = data.map((sacco, index) => {
    // console.log(sacco);
    return <SaccoRow key={index} sacco={sacco} deleteSacco={deleteSacco} />;
  });
  // const issueRows = issues.map(issue => (
  //   <IssueRow key={issue._id} issue={issue} deleteIssue={deleteIssue} />
  // ));

  return (
    <div className={classes.root}>
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Search</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl> */}
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>...</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="left">Registration</TableCell>
              <TableCell align="left">&nbsp;Location</TableCell>
              <TableCell align="left">&nbsp;Contacts</TableCell>
              <TableCell align="left">&nbsp;Id No:</TableCell>
              <TableCell align="left">&nbsp;Status</TableCell>
              <TableCell align="left">&nbsp;Created</TableCell>
              <TableCell align="left">&nbsp;Delete</TableCell>
              <TableCell align="left">&nbsp;Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Saccorow}</TableBody>
        </Table>
      </Paper>
    </div>
  );
}
