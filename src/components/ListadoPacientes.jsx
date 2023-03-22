import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (
    <div className="md:w-1/2 lg:w-2/4 md:h-screen overflow-y-scroll m-5">
      {pacientes.length !== 0 ? (
        <div>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>

          <p className="text-lg mt-5 mb-7 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              paciente={ paciente } 
              key={ paciente.id }
              setPaciente={ setPaciente }
              eliminarPaciente={ eliminarPaciente } />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">
            Aún no tienes Pacientes
          </h2>

          <p className="text-lg mt-5 mb-7 text-center">
            Tus pacientes {""}
            <span className="text-indigo-600 font-bold">se mostrarán AQUÍ</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default ListadoPacientes;
