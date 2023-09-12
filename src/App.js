import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';



function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador numClics='5' />
        <Boton
        texto='Clic'
        esBotonClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
