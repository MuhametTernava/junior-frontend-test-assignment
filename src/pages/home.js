import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import { getAllPosts } from "../config/data";
import ProductsList from "../components/productsList";
import { Seperator } from "../assets/layouts/seperator";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPosts();
        setPosts(response);
        setFeaturedPost(response?.find((post) => post.featured === true));
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
      {featuredPost && <Hero data={featuredPost} item={featuredPost} />}
      <Seperator />
      <ProductsList data={posts} loading={loading} />
    </>
  );
};

export default Home;
