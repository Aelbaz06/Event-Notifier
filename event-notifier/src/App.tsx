import { useEffect, useState } from 'react';
import './App.css';

type User = {
  id: string;
  name: string;
  username: string;
  password: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const handleFetchData = async () => {
    const response = await fetch(`http://localhost:5000/users`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
