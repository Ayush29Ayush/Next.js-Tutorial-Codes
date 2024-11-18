import { Suspense } from "react";

import { Product } from "../components/product";
import { Review } from "../components/reviews";

export default function ProductDetailPage() {
  return (
    <>
      <div>Product Detail Page</div>
      <Suspense fallback={<div>Loading Product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading Review...</div>}>
        <Review />
      </Suspense>
    </>
  );
}
