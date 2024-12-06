import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import UserList from './components/UserList';
import PostList from './components/PostList';
import DynamicUserPosts from './components/DynamicUserPosts';
import PaginatedUsers from './components/PaginatedUsers';
import MasterDetailView from './components/MasterDetailView';
import DebouncedSearch from './components/DebouncedSearch';
import InfiniteScrollPosts from './components/InfiniteScrollPosts';
import './App.css'; // Optional custom styles

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React App with REQRES Authentication and Data Features</h1>

      {/* Show Authentication Section if Not Logged In */}
      {!token ? (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>Register</h2>
              <Register />
            </div>
            <div className="col-md-6">
              <h2>Login</h2>
              <Login
                setToken={(token) => {
                  setToken(token);
                  localStorage.setItem('token', token);
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Welcome to the Dashboard</h2>
            <Logout
              setToken={() => {
                setToken(null);
                localStorage.removeItem('token');
              }}
            />
          </div>

          <section className="mb-5">
            <h3>1. User List</h3>
            <UserList />
          </section>

          <section className="mb-5">
            <h3>2. Post List with Loading Spinner</h3>
            <PostList />
          </section>

          <section className="mb-5">
            <h3>3. Dynamic User Posts</h3>
            <DynamicUserPosts />
          </section>

          <section className="mb-5">
            <h3>4. Paginated Users</h3>
            <PaginatedUsers />
          </section>

          <section className="mb-5">
            <h3>5. Master-Detail View</h3>
            <MasterDetailView />
          </section>

          <section className="mb-5">
            <h3>6. Debounced Search</h3>
            <DebouncedSearch />
          </section>

          <section className="mb-5">
            <h3>7. Infinite Scroll Posts</h3>
            <InfiniteScrollPosts />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
