import React from 'react';
import { Link } from 'react-router-dom';

// import Typography from '@mui/material/Typography';

const Copyright = () => {
  return (
    <h1 variant="body2" color="textSecondary" align="center">
      Hello World!
    </h1>
  );
}

export default function Album() {
  return (
    <>
      <main>
        <Copyright />
      </main>
    </>
  );
}
