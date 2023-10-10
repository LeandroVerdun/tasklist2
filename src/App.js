import './App.css';
import angelLogo from './imagenes/redengel7.1.png';
import ListaDeTareas from './componentes/Red-Task-List';


function App() {
  return (
    <div className="task-app">
      <div className='Red-Angel_logo-contenedor'>
        <img 
        src={angelLogo} 
        className='Red-Angel-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Red Task</h1>
        <ListaDeTareas />        
      </div>
        
    </div>
  );
}

export default App;
