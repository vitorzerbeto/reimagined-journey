import { Box } from '@mui/material';

import CategoryCard from '../CategoryCard/CategoryCard';
import { useCategories } from '@/providers/CategoriesProvider';

const CategoryList: React.VFC = () => {
  const { categories } = useCategories();

  return (
    <Box
      component="div"
      sx={{ display: 'flex', justifyContent: 'space-evenly' }}
    >
      {categories?.map(({ strCategoryThumb, strCategory, idCategory }) => (
        <CategoryCard
          key={idCategory}
          id={idCategory}
          name={strCategory}
          thumb={strCategoryThumb}
        />
      ))}
    </Box>
  );
};

export default CategoryList;
