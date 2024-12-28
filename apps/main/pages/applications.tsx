import { Suspense, lazy } from 'react';

const RemoteApplications = lazy(() => import('landing/Applications'));

const ApplicationsPage = () => {
  return (
    <Suspense fallback={null}>
      <div>Muhsne</div>
      <RemoteApplications />
    </Suspense>
  );
};

export default ApplicationsPage;
