import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);      // 1. state to store data
  const [loading, setLoading] = useState(true); // 2. loading state
  const [error, setError] = useState(null);     // 3. error state

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // 4. API URL
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();                  // 5. convert response to JSON
      })
      .then(data => {
        setUsers(data);                          // 6. store data in state
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);                   // 7. handle errors
        setLoading(false);
      });
  }, []); // 8. run once on component mount

//   useEffect(() => {
//   const getUsers = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setUsers(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   getUsers();
// }, []);

  // 9. Display loading, error, or data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>User List:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
