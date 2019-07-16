/* eslint-disable react/no-array-index-key */
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function SmsData(Number, Phone_number, Message, Date, Time) {
  return { Number, Phone_number, Message, Date, Time };
}

const rows = [
  SmsData(1, '0799820090', 'KME744N', '20/12/12', '10:24'),
  SmsData(2, '0799820090', 'KME744N', '20/12/12', '10:24'),
  SmsData(3, '0799820090', 'KME744N', '20/12/12', '10:24'),
  SmsData(4, '0799820090', 'KME744N', '20/12/12', '10:24'),
  SmsData(5, '0799820090', 'KME744N', '20/12/12', '10:24'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

function SmsTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Number</StyledTableCell>
            <StyledTableCell align="right">Phone_number</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => 
            <StyledTableRow key={index} row={row}>
              <StyledTableCell component="th" scope="row">
                {row.Number}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Phone_number}</StyledTableCell>
              <StyledTableCell align="right">{row.Message}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Time}</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SmsTable;