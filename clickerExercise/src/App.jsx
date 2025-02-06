import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './Clicker'

function App() {
  return (
    <div>
      <Clicker message="HI!!!!" buttonText="Click me" />
      <Clicker message="Please stop clicking me!" buttonText="Don't Click me!" />
    </div >
  );
}

export default App
