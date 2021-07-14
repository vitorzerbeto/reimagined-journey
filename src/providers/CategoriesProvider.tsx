import React, { useState } from 'react';
import { ICategory } from '../services/Categories';

interface ICategoriesContext {
  categories: ICategory[] | [];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const initialState = {
  categories: [],
  setCategories: () => null,
};

export const CategoriesContext =
  React.createContext<ICategoriesContext>(initialState);

export const CategoriesProvider: React.FC = (props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => React.useContext(CategoriesContext);
