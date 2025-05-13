import { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './api';
import ZipcodeSearch from './components/ZipCodeSearch';

type User = {
  id: string;
  name: string;
  username: string;
  password: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
  }, []);

  return (
    <ZipcodeSearch />
  );
}

export default App;
