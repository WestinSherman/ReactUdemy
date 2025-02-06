import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Clicker from './Clicker';
import Form from './Form';

const data = [
  { item: 'eggs', quantity: 12, completed: false },
  { item: 'milk', quantity: 1, completed: true },
  { item: 'chicken breasts', quantity: 4, completed: false },
  { item: 'carrots', quantity: 12, completed: true },
];

function App() {
  return (
    <div>
      <Form />
      <Clicker />
      {/*<ShoppingList items={data} />*/}
      {/* <Heading color="teal" text="Hello World" fontSize="20px" />
     <Heading color="blue" text="blah" fontSize="48px" />
     <DoubleDice />
     <DoubleDice />
     <DoubleDice />
     <ColorList colors={["red", "pink", "green", "blue"]} />
     <ColorList colors={["olive", "orangered", "spacegrey"]} />
     <ListPicker values={[1, 2, 3]} />
     <ListPicker values={["a", "b", "c"]} />
     <Greeter person="Bill" from="Timmy" />
     <Greeter person="Ted" />
     <Greeter from="Anne" />
     <Die numSides={20} />
     <Die />
     <Die numSides={10} />*/}
    </div >
  );
};

export default App
