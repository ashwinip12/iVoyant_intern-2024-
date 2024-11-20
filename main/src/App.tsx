import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "./Action";
import { RootState } from "./store"; 

import { Dispatch } from "redux";
import { UserActions } from "./Action";

interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch<Dispatch<UserActions>>(); 

 
  const { loading, data, error } = useSelector((state: RootState) => state.users);


 async function fetchUsers()  {
    dispatch(fetchUsersRequest()); 
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      console.log(users)
      dispatch(fetchUsersSuccess(users)); 
    } catch (error) {
  if (error instanceof Error) {
    dispatch(fetchUsersFailure(error.message));
  } else {
    dispatch(fetchUsersFailure("An unknown error occurred")); 
  }
}
  };

  useEffect(() => {
    fetchUsers(); 
     
  },[]);

  return (
    <div>
      <h1>User List</h1>
     
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
      <ul>
  {data
     .sort((a: User, b: User) => a.name.localeCompare(b.name)) 
  .filter((user: User) => user.name.toLowerCase() === "leanne graham") 
  
    .map((user: User) => (
      <li key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </li>
    ))}
</ul>

      )}
    </div>
  );
};

export default App;
