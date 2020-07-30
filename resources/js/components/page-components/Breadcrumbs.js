import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';


const Breadcrumbs = props => {
    const {
        history,
        location: {pathname}
    } = props;
    const pathnames = pathname.split("/").filter(x => x);
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link onClick={() => history.push("/")}>Home</Link>
      {pathnames.map((name, index) => {
          return <Link onClick={() => history.push("/")}>{name}</Link>;
      })}
    </MUIBreadcrumbs>
  );
}

export default withRouter(Breadcrumbs); 