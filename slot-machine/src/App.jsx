import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Slot from "./Slots";
import './App.css';
import Slots from './Slots';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍌" val3="🍒" />
      <Slots val1="🍒" val2="🍒" val3="🍒" />
    </div>
  )
}

export default App
