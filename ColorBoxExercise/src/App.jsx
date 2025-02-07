import { useState } from 'react';
import './App.css';
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';

const colors =
  [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#16A085",
    "#E74C3C",
    "#2ECC71",
    "#3498DB",
    "#D35400",
    "#C0392B",
    "#1ABC9C",
    "#9B59B6",
    "#34495E",
    "#27AE60",
    "#F39C12",
    "#2980B9",
    "#BDC3C7",
    "#7F8C8D",
    "#ECF0F1"
  ];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ColorBoxGrid colors={colors} />
    </div>
  )
}

export default App
