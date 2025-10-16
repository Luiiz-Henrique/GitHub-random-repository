import './App.css';
import HelloWord from './components/HelloWord';

function teste () {
  console.log("Dentro da Props");
}

function App() {
  return (
    <div className="App">
      <HelloWord name="Luiz" event={teste}/>
    </div>
  );
}

export default App;
