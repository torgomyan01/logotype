import React from 'react';
import { Skeleton } from '@mui/material';

function LoadingProduct() {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-5">
      <Skeleton variant="rounded" width="100%" height="14.375rem" />
      <Skeleton variant="rounded" width="70%" height="10px" className="mt-3" />
      <Skeleton variant="rounded" width="100%" height="20px" className="mt-3" />
      <Skeleton variant="rounded" width="90%" height="8px" className="mt-3" />

      <Skeleton variant="rounded" width="100%" height="8px" className="mt-3" />
      <Skeleton variant="rounded" width="100%" height="8px" className="mt-2" />
      <Skeleton variant="rounded" width="100%" height="8px" className="mt-2" />
      <Skeleton variant="rounded" width="100%" height="8px" className="mt-2" />
      <Skeleton variant="rounded" width="100%" height="8px" className="mt-2" />
    </div>
  );
}

export default LoadingProduct;
