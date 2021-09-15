import CategoryList from '@/components/Categories/CategoryList/CategoryList';
import { CategoriesProvider } from '@/providers/CategoriesProvider';

function Home() {
  return (
    <CategoriesProvider>
      <div className="Home">
        <CategoryList />
      </div>
    </CategoriesProvider>
  );
}

export default Home;
