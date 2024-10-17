import React, { useEffect, useState } from 'react';
import './index.css';

const url = "https://api.github.com/users";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          setIsError(true)
        }
        return response.json();
      })
      .then((users) => {
        // Example: Get the first user from the API
        const firstUser = users[0].login;
        setUser(firstUser);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsError(true);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <>
      <h2>{user}</h2>
    </>
  );
}

export default App;
