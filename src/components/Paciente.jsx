import React from 'react'

function Paciente({ paciente, setPaciente, eliminarPaciente }) {

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?')
    if(respuesta) {
      eliminarPaciente(paciente.id);
    }
  }

  return (
    <div>
      <div 
        className='m-3 bg-white shadow-lg px-5 py-10 rounded-lg'>
        <p 
          className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre Mascota: {''}
            <span className='font-normal normal-case'>{ paciente.nombre }</span>
        </p>

        <p 
          className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre del Propietario: {''}
            <span className='font-normal normal-case'>{ paciente.propietario }</span>
        </p>

        <p 
          className='font-bold mb-3 text-gray-700 uppercase'>
            e-mail: {''}
            <span className='font-normal normal-case'>{ paciente.email }</span>
        </p>

        <p 
          className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha de Alta: {''}
            <span className='font-normal normal-case'>{ paciente.fecha }</span>
        </p>

        <p 
          className='font-bold mb-3 text-gray-700 uppercase'>
            Síntomas: {''}
            <span className='font-normal normal-case'>{ paciente.sintomas}</span>
        </p>

      <div className='flex justify-evenly'>
          <button 
            onClick={ () => setPaciente(paciente) }
            className='bg-blue-500 mt-5 font-semibold shadow-lg text-white px-10 py-2 uppercase rounded-md cursor-pointer hover:bg-blue-600 transition-all'>
            Editar
          </button>

          <button
            onClick={ handleEliminar }
            type="button" 
            className='bg-red-500 mt-5 font-semibold shadow-lg text-white px-8 py-2 uppercase rounded-md cursor-pointer hover:bg-red-700 transition-all'>
            Eliminar
          </button>
      </div>

      </div>
    </div>
  )
}

export default Paciente


