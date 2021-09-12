import ApiInstance from './ApiInstance';

export interface ICategory {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

class CategoriesService {
  static getCategoriesList() {
    return ApiInstance.get<{ categories: ICategory[] }>('categories.php');
  }
}

export default CategoriesService;
