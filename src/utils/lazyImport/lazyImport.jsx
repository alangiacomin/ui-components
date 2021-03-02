import React, { lazy, Suspense } from 'react';

const lazyImport = (func, fallback) => {
  const Component = lazy(func);
  return (props) => (
    <Suspense fallback={fallback || null}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyImport;
