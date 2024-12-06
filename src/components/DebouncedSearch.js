import React, { useState, useEffect } from 'react';

const DebouncedSearch = () => {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      const fetchPosts = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${debouncedQuery}`);
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

      fetchPosts();
    }
  }, [debouncedQuery]);

  return (
    <div>
      <h3>Debounced Search</h3>
      <input
        type="text"
        placeholder="Search posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
