import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Product</Link>
      </nav>
    </div>
  );
};

export default Home;
