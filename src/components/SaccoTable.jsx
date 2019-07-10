import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

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
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>...</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registration</TableCell>
              <TableCell align="right">&nbsp;Location</TableCell>
              <TableCell align="right">&nbsp;Contacts</TableCell>
              <TableCell align="right">&nbsp;Action</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Saccorow}</TableBody>
        </Table>
      </Paper>
    </div>
  );
}
