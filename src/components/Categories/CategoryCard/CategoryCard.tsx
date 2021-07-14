import React from 'react';
import './CategoryCard.css';

interface ICategoryCard {
  id: string;
  name: string;
  thumb: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({ id, name, thumb }) => {
  return (
    <a href={`http://localhost:3000/category/${id}`} className="category-card">
      <img src={thumb} alt={name} />
      <p>{name}</p>
    </a>
  );
};

export default CategoryCard;
