import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';

function App() {
  return (
    <div>
      <ListPicker values={[1, 2, 3, 4, 5]} />
      <ListPicker values={{ a: 1, b: 2 }} />
      {/*<Greeter person="Bill" from="Timmy" />
      <Greeter person="Ted" />
      <Greeter from="Anne" />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />*/}
    </div>
  );
};

export default App
