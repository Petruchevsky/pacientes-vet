import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});

  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])
  
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
        />
     <div className='md:flex mt-12 '>
       <Formulario
        paciente={ paciente }
        setPaciente={ setPaciente }
        pacientes= { pacientes }
        setPacientes= { setPacientes }/>

       <ListadoPacientes
        paciente={ paciente } 
        pacientes={ pacientes }
        setPaciente={ setPaciente }
        eliminarPaciente={ eliminarPaciente }/>
     </div>
    </div>
  )
}

export default App
