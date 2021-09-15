import { useEffect, useState } from 'react';

import CategoriesService from '../../../services/Categories';
import CategoryCard from '../CategoryCard/CategoryCard';
import { useCategories } from '../../../providers/CategoriesProvider';

const CategoryList: React.VFC = () => {
  const { categories, setCategories } = useCategories();

  const [error, setError] = useState(undefined);
  const [isLoadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    CategoriesService.getCategoriesList()
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((e) => setError(e))
      .finally(() => setLoadingCategories(false));
  }, [setCategories]);

  if (isLoadingCategories) {
    return (
      <div className="category-list">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-list">
        <p>{error}</p>
      </div>
    );
  }

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
