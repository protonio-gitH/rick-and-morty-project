import * as React from 'react';
import Grid from '@mui/material/Grid';

interface GridContainerProps {
  children: React.ReactNode;
}

function GridContainer({ children }: GridContainerProps) {
  const itemsRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <Grid sx={{ flexGrow: 1 }}
          container spacing={3}
          style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {itemsRow.map((value) => (
            <Grid key={value} item>
              {children}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GridContainer