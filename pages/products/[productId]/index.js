import { useRouter } from "next/router";
import React from "react";

const ProductsDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h2>Products Details {productId}</h2>;
};

export default ProductsDetail;
