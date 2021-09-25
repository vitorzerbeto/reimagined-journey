import CategoryCard from '../CategoryCard/CategoryCard';
import { useCategories } from '@/providers/CategoriesProvider';

const CategoryList: React.VFC = () => {
  const { categories } = useCategories();

  return (
    <div className="category-list">
      {categories?.map(({ strCategoryThumb, strCategory, idCategory }) => (
        <CategoryCard
          key={idCategory}
          id={idCategory}
          name={strCategory}
          thumb={strCategoryThumb}
        />
      ))}
    </div>
  );
};

export default CategoryList;
