import React, { lazy, Suspense } from 'react';

const lazyImport = (func) => {
  const Component = lazy(func);
  return (props) => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyImport;
