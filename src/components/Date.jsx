import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles({
  grid: {
    width: '60%'
  }
});

export default function MaterialUIPickers({
  onChangeDateLte,
  onChangeDateGte,
  dateLte,
  dateGte
}) {
  //   The first commit of Material-UI
  //     const [selectedDate, setSelectedDate] = React.useState(
  //       new Date('2014-08-18T21:11:54')
  //     );

  //     function handleDateChange(date) {
  //         setSelectedDate(date);
  //     }

  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Date picker"
          value={dateGte}
          onChange={onChangeDateLte}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Date picker"
          value={dateLte}
          onChange={onChangeDateLte}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
