import React, { useState } from 'react';

const ErrorHandlingComponent = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      await response.json();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={fetchData}>Retry</button>
    </div>
  );
};

export default ErrorHandlingComponent;
