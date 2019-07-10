import React from 'react'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


export const Already = ()=>(
    <Grid container justify="flex-end">
      <Grid item>
        <Link href="/signin" variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
    )
    