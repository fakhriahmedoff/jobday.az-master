import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Pagination count={props.count} onChange={props.handleChange} page={props.page}  variant="outlined" shape="rounded" />
    </div>
  );
}