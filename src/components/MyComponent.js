// import React, { useState, useEffect } from "react";

// function MyComponent() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       setUsers(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul data-testid="user-list">
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MyComponent;

// import React, { useState, useEffect } from "react";

// const MyComponent = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("/api/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error fetching data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!users.length) {
//     return <div>No users found</div>;
//   }

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul data-testid="user-list">
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data.</div>;
  }

  return (
    <ul data-testid="item-list">
      {items.map((item) => (
        <li key={item.id}>{item.username}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
