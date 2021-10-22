import './App.css';
import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UserTable from './Components/UserTable';

function App() {
  const [userFormData, setuserFormData] = useState( [] );
  const getUserData = ( userData ) => {
    console.log( userData );
    /*   Dont update the state like below  
    userFormData.push( userData );
    setuserFormData(userFormData) */
    // 1.Take copy of state array
    const userFormDataCopy = [...userFormData];
    // 2. Do all the necessary changes / code changes
    userFormDataCopy.push( userData );
    // 3. Set the copied array the state
    setuserFormData( userFormDataCopy );
  }
  return (
    <div className="App">
      <UserForm getUserData={ getUserData } />
      <UserTable userFormData={userFormData}/>
    </div>
  );
}

export default App;
