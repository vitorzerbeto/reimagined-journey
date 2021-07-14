import { useEffect, useState } from 'react';

import './CategoryList.css';

import CategoriesService, { ICategory } from '../../../services/Categories';
import CategoryCard from '../CategoryCard/CategoryCard';

function CategoryList(): JSX.Element {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState(undefined);
  const [isLoadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    CategoriesService.getCategoriesList()
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((e) => setError(e))
      .finally(() => setLoadingCategories(false));
  }, []);

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
          id={idCategory}
          name={strCategory}
          thumb={strCategoryThumb}
        />
      ))}
    </div>
  );
}

export default CategoryList;
