import React, { useEffect, useState } from "react";
import ErrorTodosLosCampos from "./Errors";

function Formulario ({ paciente, setPaciente, pacientes, setPacientes }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect( () => {
    if (Object.keys(paciente).length > 0) {
    setNombre(paciente.nombre);
    setPropietario(paciente.propietario);
    setEmail(paciente.email);
    setFecha(paciente.fecha);
    setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const keyGenerator = () => {
    const random = Math.random().toString(36).slice(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);

      
      var objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };
    }
      if (paciente.id) {
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map( (pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados);
        setPaciente({});

      } else {
      objetoPaciente.id = keyGenerator();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/4 m-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-7">
        Añade Pacientes y {""}
        <span className="text-yellow-700 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg py-10 px-5 mb-5"
      >
        {error && <ErrorTodosLosCampos />}

        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="propietario"
          >
            Nombre del Propietario
          </label>
          <input
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="email"
          >
            e-mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Ingrese su e-mail"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="alta"
          >
            fecha de alta
          </label>
          <input
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="sintomas"
          >
            síntomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            id="sintomas"
            placeholder="Describe los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <input
          type="submit"
          value={ paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
          className="bg-indigo-600 w-full p-3 text-white uppercase rounded-md font-bold hover:bg-indigo-800 cursor-pointer transition-all shadow-lg shadow-gray-500"
        />
      </form>
    </div>
  );
}

export default Formulario;
