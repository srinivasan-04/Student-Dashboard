import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          '& .MuiPickersDay-root.Mui-selected': {
            backgroundColor: '#526d82', // Change to your desired color
            color: '#ffffff', // Text color for the selected date
            '&:hover': {
              backgroundColor: '#3a4f61', // Hover color for selected date
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
