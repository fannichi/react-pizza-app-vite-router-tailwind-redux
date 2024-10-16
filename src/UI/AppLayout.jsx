import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import ColorPills from './ColorPills';

function AppLayout() {
  const isLoading = useNavigation().state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_min-content_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <ColorPills />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
