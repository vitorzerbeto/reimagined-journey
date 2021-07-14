import { AxiosResponse } from 'axios';
import ApiInstance from './ApiInstance';

export interface ICategory {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

interface IGetCategoriesListResponse {
  categories: ICategory[];
}

class CategoriesService {
  static getCategoriesList(): Promise<
    AxiosResponse<IGetCategoriesListResponse>
  > {
    return ApiInstance.get('categories.php');
  }
}

export default CategoriesService;
