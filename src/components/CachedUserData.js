import React, { useState, useEffect } from 'react';

const CachedUserData = () => {
  const [users, setUsers] = useState([]);
  const [cache, setCache] = useState({});

  const fetchUsers = async () => {
    if (cache.users) {
      setUsers(cache.users);
    } else {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setCache((prevCache) => ({ ...prevCache, users: data }));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Cached Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CachedUserData;
