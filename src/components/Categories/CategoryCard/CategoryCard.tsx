import React from 'react';
import { Avatar, Link } from '@mui/material';

interface ICategoryCard {
  id: string;
  name: string;
  thumb: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({ id, name, thumb }) => {
  return (
    <Link title={name} href={`http://localhost:3000/category/${id}`}>
      <Avatar src={thumb} alt={name} sx={{ width: 50, height: 50 }} />
    </Link>
  );
};

export default CategoryCard;
