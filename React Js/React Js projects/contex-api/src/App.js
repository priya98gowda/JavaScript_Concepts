import './App.css';
import { UserProvider } from './context/Context';
import ComponentA from './components/ComponentA';
import { LoginProvider } from './context/loginContext';
import ComponentD from './components/ComponentD';
import { useState } from 'react';
import Myref from './components/Myref';
import UseRef from './components/UseRef';

function App() {
  const [uname, setuname] = useState( 'Priya' )
  const updateUser = () => {
    console.log( 'loginData', loginData );
    // Below code will not make a render
    // loginData.username = "ajay"

    // Below code wil make a render
    setloginData( {
      ...loginData,
      userName:'Preethi'
    })
  }

  const logoutUser = () => {
    setloginData( {
      ...loginData,
      login:false
    })
  }

  const [loginData, setloginData] = useState( {
    login: true,
    userName: 'Girish',
    logoutUser:logoutUser
  })
  
  return (
    <div className="App">
      <UserProvider value={ uname } >
        <ComponentA uname={ uname } />
        <button onClick={ updateUser }>Update User</button>
        <button onClick={()=>{setuname('Preethi')}}>Update</button>
      </UserProvider>
      <LoginProvider value={loginData}>
        <ComponentD/>
      </LoginProvider>
      <Myref />
      <UseRef/>
    </div>
  );
}

export default App;
