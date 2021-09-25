import React from 'react';
import { Avatar, Link, Typography } from '@mui/material';
import useStyles from '@/hooks/useStyles';

interface ICategoryCard {
  id: string;
  name: string;
  thumb: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({ id, name, thumb }) => {
  return (
    <Link
      title={name}
      href={`http://localhost:3000/category/${id}`}
      underline="none"
      color="text.primary"
    >
      <Avatar src={thumb} alt={name} sx={{ width: 100, height: 100 }} />
      <Typography component="p" align="center">
        {name}
      </Typography>
    </Link>
  );
};

export default CategoryCard;
