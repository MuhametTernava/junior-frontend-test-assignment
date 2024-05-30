import React, { useEffect, useState } from "react";
import ProductsList from "../components/productsList";
import { getAllPosts } from "../config/data";
import { Seperator } from "../assets/layouts/seperator";

const BestSellerProducts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPosts();
        setPosts(response.filter((post) => post.bestseller));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData().catch(console.error);
  }, []);

  if (loading) return "Loading...";

  return (
    <>
      <Seperator />
      <ProductsList data={posts} loading={loading} />
    </>
  );
};

export default BestSellerProducts;
