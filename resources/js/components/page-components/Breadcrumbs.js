import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';


const Breadcrumbs = props => {
    console.log(props);
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link color="inherit">Material-UI</Link>
      <Link color="inherit">Core</Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </MUIBreadcrumbs>
  );
}

export default withRouter(Breadcrumbs); 