import React from 'react'

import Login from '@/components/pages/login-register/Login';

const LoginRegister = ({params}) => {
const akses = params.masuk;

  return (
    <>
      {akses === "login" && <Login title={akses}/>}
    </>
  );
}

export default LoginRegister