import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15, // Increased thickness
  borderRadius: 5,
  marginTop: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

const CompletedCourses = () => {
  const courses = [
    { name: 'Java Code', score: 75 },
    { name: 'Design Basics', score: 65 },
    { name: 'Team Building', score: 30 },
    { name: 'Business Marketing', score: 20 },
  ];

  return (
    <section className="report-completed-courses" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Completed Courses</Typography>
        <Typography variant="h6" color="textSecondary">...</Typography>
      </Box>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {courses.map((course, index) => (
          <li key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body1" style={{ flex: 1 }}>{course.name} </Typography>
            <Box sx={{ width: '100%', maxWidth: 250 }}>
              <BorderLinearProgress variant="determinate" value={course.score} />
            </Box>
            <Typography variant="body2" color="textSecondary" style={{ marginLeft: '10px' }}>
              {course.score}%
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompletedCourses;
