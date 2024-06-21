import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, CircularProgress, Alert } from '@mui/material';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" height="5vh"><CircularProgress /></Box>;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Box component="main" sx={{ marginTop: '100px', marginLeft: '100px', p: 3,  width: '85vw' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        EMPLOYEE LIST
      </Typography>
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="employee table">
          <TableHead>
            <TableRow sx={{ fontWeight: 'bold', backgroundColor: 'grey' }}>
              <TableCell>EMPLOYEE ID</TableCell>
              <TableCell>EMPLOYEE NAME</TableCell>
              <TableCell align="left">USERNAME</TableCell>
              <TableCell align="left">EMAIL</TableCell>
              <TableCell align="left">COMPANY</TableCell>
              <TableCell align="left">PHONE</TableCell>
              <TableCell align="left">ADDRESS</TableCell>
              <TableCell align="left">WEBSITE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:nth-of-type(odd)': {
                    backgroundColor: 'action.hover',
                  },
                  '&:nth-of-type(even)': {
                    backgroundColor: 'common.white',
                  },
                }}
              >
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  {row.company.name}<br />
                  {row.company.catchPhrase}<br />
                  {row.company.bs}
                </TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">
                  {row.address.street}, {row.address.suite}<br />
                  {row.address.city}, {row.address.zipcode}
                </TableCell>
                <TableCell align="left">{row.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
