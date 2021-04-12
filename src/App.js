import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import './App.css';
import SwipeButton from "./components/SwipeButton";

function App() {
  return (
    <div className="App">
       <Header/>
       <TinderCards /> 
       <SwipeButton />
     
    </div>
  );
}

export default App;
