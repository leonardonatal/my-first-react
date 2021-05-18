//functions that returns jsx
// starting with capital letter from another component
// props object used to pass data from another component
import Todo from './components/Todo';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='learn React'/>
      <Todo text='master React'/>
      <Todo text='explore React'/>
    </div>
  );
}

export default App;
