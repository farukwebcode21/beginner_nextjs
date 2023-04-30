import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placeing ordr");
    router.push("/products");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Product</Link>
        <button className="btn" onClick={handleClick}>
          Place Order
        </button>
      </nav>
    </div>
  );
};

export default Home;
