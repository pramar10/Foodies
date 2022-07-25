import React from 'react';
import RootNavigation from './navigation/navigation'
import { AuthProvider } from './navigation/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <RootNavigation/>
    </AuthProvider>
  )
}

export default App

