import CategoryList from '@/components/Categories/CategoryList/CategoryList';
import CategoriesService, { ICategory } from '@/services/Categories';
import { CategoriesProvider } from '@/providers/CategoriesProvider';

function Home({ categories }: { categories: ICategory[] }) {
  return (
    <CategoriesProvider categories={categories}>
      <div className="Home">
        <CategoryList />
      </div>
    </CategoriesProvider>
  );
}

Home.getInitialProps = async () => {
  const res = await CategoriesService.getCategoriesList();

  return { categories: res.data.categories };
};

export default Home;
