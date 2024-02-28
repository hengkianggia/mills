"use client"

import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/index'

const Providers = ({children, storee}) => {
  return <Provider store={store || storee}>{children}</Provider>;
}

export default Providers