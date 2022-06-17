import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const LeyoutGame = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default LeyoutGame;
