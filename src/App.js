import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';

function App() {
  return (
  
    <div className="App bg-gradient-to-r from-emerald-100 to-emerald-700 min-h-screen">
      <h1 className='text-8xl text-center bg-gradient-to-r from-emerald-200 to-emerald-900 font-bold font-sans p-2.5 text-white'>ToDo</h1>
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
