import React, { useState, useEffect, useRef } from 'react';

const InfiniteScrollPosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        const data = await response.json();
        setPosts((prevPosts) => [...prevPosts, ...data]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div>
      <h3>Infinite Scroll</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div ref={loader} style={{ height: '50px', background: '#f0f0f0' }} />
    </div>
  );
};

export default InfiniteScrollPosts;
