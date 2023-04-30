import { useRouter } from "next/router";
import React from "react";

const Doc = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return (
    <div>
      <h1>Doc Home Page</h1>
    </div>
  );
};

export default Doc;
