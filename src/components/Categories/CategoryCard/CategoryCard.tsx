import React from 'react';
import { Theme, Avatar, Link } from '@material-ui/core';

import useStyles from '../../../hooks/useStyles';

interface ICategoryCard {
  id: string;
  name: string;
  thumb: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({ id, name, thumb }) => {
  const classes = useStyles((theme: Theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  return (
    <Link href={`http://localhost:3000/category/${id}`}>
      <Avatar src={thumb} alt={name} classes={classes.large} />
    </Link>
  );
};

export default CategoryCard;
