import React from 'react'

import Login from '@/components/pages/login-register/Login';
import Register from '@/components/pages/login-register/Register';

const LoginRegister = ({params}) => {
const akses = params.masuk;

  return (
    <>
      {akses === "login" && <Login title={akses}/>}
      {akses === "register" && <Register title={akses}/>}
    </>
  );
}

export default LoginRegister