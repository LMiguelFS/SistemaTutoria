import React, { useState } from 'react';
import axios from 'axios';

const RegistroGrupalForm = () => {
  // Estados para los campos del formulario grupal
  const [ID_atenciongrupal, setID_atenciongrupal] = useState('');
  const [user_id, setuser_id] = useState('');
  const [NroSession, setNroSession] = useState('');
  const [fecha, setFecha] = useState('');
  const [tema, setTema] = useState('');
  const [resultadoEsperado, setResultadoEsperado] = useState('');
  const [NroEstudiantesVarones, setNroEstudiantesVarones] = useState('');
  const [NroEstudiantesMujeres, setNroEstudiantesMujeres] = useState('');
  const [cumplimientoObjetivo, setCumplimientoObjetivo] = useState('');
  const [interesDelTema, setInteresDelTema] = useState('');
  const [participacionAlumnos, setParticipacionAlumnos] = useState('');
  const [aclaracionDudas, setAclaracionDudas] = useState('');
  const [reprogramacionDelTema, setReprogramacionDelTema] = useState('');
  const [ciclo, setCiclo] = useState('');
  const [comentarioSignificativo, setComentarioSignificativo] = useState('');
  const [animacionMotivacion, setAnimacionMotivacion] = useState('');
  const [apropiacionDesarrollo, setApropiacionDesarrollo] = useState('');
  const [transferenciaPracticaCompromiso, setTransferenciaPracticaCompromiso] = useState('');
  const [evaluacion, setEvaluacion] = useState('');
  const [error, setError] = useState(null);

  // Validación de campos (puedes personalizarla según lo que necesites)
  const validateForm = () => {
    // Ejemplo de validaciones simples, ajustar según los requerimientos
    if (!NroSession || !tema || !ciclo) {
      setError('Los campos Número de sesión, Tema y Ciclo son obligatorios');
      return false;
    }

    // Validar que los números de estudiantes sean positivos
    if (isNaN(NroEstudiantesVarones) || isNaN(NroEstudiantesMujeres) || NroEstudiantesVarones < 0 || NroEstudiantesMujeres < 0) {
      setError('Los números de estudiantes deben ser valores numéricos positivos');
      return false;
    }

    return true;
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Crear un objeto con los datos que se enviarán al backend
    const data = {
      ID_atenciongrupal: ID_atenciongrupal,
      user_id: user_id,
      Nro_session: NroSession,
      Fecha: fecha,
      Tema: tema,
      ResultadoEsperado: resultadoEsperado,
      NroEstudiantesVarones: parseInt(NroEstudiantesVarones), // Convierte a entero
      NroEstudiantesMujeres: parseInt(NroEstudiantesMujeres), // Convierte a entero
      CumplimientoObjetivo: cumplimientoObjetivo,
      InteresDelTema: interesDelTema,
      ParticipacionAlumnos: participacionAlumnos,
      AclaracionDudas: aclaracionDudas,
      ReprogramacionDelTema: reprogramacionDelTema,
      Ciclo: ciclo,
      ComentarioSignificativo: comentarioSignificativo,
      AnimacionMotivacion: animacionMotivacion,
      ApropiacionDesarrollo: apropiacionDesarrollo,
      TransferenciaPracticaCompromiso: transferenciaPracticaCompromiso,
      Evaluacion: evaluacion,
    };

    try {
      // Hacer el POST a tu API
      const response = await axios.post('http://localhost:8000/api/registrogrupal', data);

      if (response.status === 200) {
        alert('Registro grupal exitoso');
        // Limpiar los campos después de un registro exitoso
        ID_atenciongrupal('');
        user_id('');
        setNroSession('');
        setFecha('');
        setTema('');
        setResultadoEsperado('');
        setNroEstudiantesVarones('');
        setNroEstudiantesMujeres('');
        setCumplimientoObjetivo('');
        setInteresDelTema('');
        setParticipacionAlumnos('');
        setAclaracionDudas('');
        setReprogramacionDelTema('');
        setCiclo('');
        setComentarioSignificativo('');
        setAnimacionMotivacion('');
        setApropiacionDesarrollo('');
        setTransferenciaPracticaCompromiso('');
        setEvaluacion('');
      }
    } catch (error) {
      // En caso de error, mostrar el mensaje
      setError('Hubo un error al registrar los datos');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Formulario de Registro Grupal</h2>

{error && <p style={{ color: 'red' }}>{error}</p>}

<form onSubmit={handleSubmit} style={styles.form}>
  <div style={styles.inputGroup}>
    <label>Código Atención Grupal:</label>
    <input
        type="text"
        value={ID_atenciongrupal}
        onChange={(e) => setID_atenciongrupal(e.target.value)}
        required
        style={styles.input}
        />
  </div>
  <div style={styles.inputGroup}>
    <label>Código de Tutor:</label>
    <input
        type="text"
        value={user_id}
        onChange={(e) => setuser_id(e.target.value)}
        required
        style={styles.input}
        />
  </div>
  <div style={styles.inputGroup}>
    <label>Número de sesión:</label>
    <input
      type="text"
      value={NroSession}
      onChange={(e) => setNroSession(e.target.value)}
      required
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Fecha:</label>
    <input
      type="date"
      value={fecha}
      onChange={(e) => setFecha(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Tema:</label>
    <input
      type="text"
      value={tema}
      onChange={(e) => setTema(e.target.value)}
      required
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Resultado Esperado:</label>
    <input
      type="text"
      value={resultadoEsperado}
      onChange={(e) => setResultadoEsperado(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Número de Estudiantes Varones:</label>
    <input
      type="number"
      value={NroEstudiantesVarones}
      onChange={(e) => setNroEstudiantesVarones(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Número de Estudiantes Mujeres:</label>
    <input
      type="number"
      value={NroEstudiantesMujeres}
      onChange={(e) => setNroEstudiantesMujeres(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Cumplimiento del Objetivo:</label>
    <input
      type="text"
      value={cumplimientoObjetivo}
      onChange={(e) => setCumplimientoObjetivo(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Interés del Tema:</label>
    <input
      type="text"
      value={interesDelTema}
      onChange={(e) => setInteresDelTema(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Participación de Alumnos:</label>
    <input
      type="text"
      value={participacionAlumnos}
      onChange={(e) => setParticipacionAlumnos(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Aclaración de Dudas:</label>
    <input
      type="text"
      value={aclaracionDudas}
      onChange={(e) => setAclaracionDudas(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Reprogramación del Tema:</label>
    <input
      type="text"
      value={reprogramacionDelTema}
      onChange={(e) => setReprogramacionDelTema(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Ciclo:</label>
    <input
      type="text"
      value={ciclo}
      onChange={(e) => setCiclo(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Comentario Significativo:</label>
    <textarea
      value={comentarioSignificativo}
      onChange={(e) => setComentarioSignificativo(e.target.value)}
      style={{ ...styles.input, height: '100px' }}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Animación y Motivación:</label>
    <input
      type="text"
      value={animacionMotivacion}
      onChange={(e) => setAnimacionMotivacion(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Apropiación y Desarrollo:</label>
    <input
      type="text"
      value={apropiacionDesarrollo}
      onChange={(e) => setApropiacionDesarrollo(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Transferencia y Práctica de Compromiso:</label>
    <input
      type="text"
      value={transferenciaPracticaCompromiso}
      onChange={(e) => setTransferenciaPracticaCompromiso(e.target.value)}
      style={styles.input}
    />
  </div>
  <div style={styles.inputGroup}>
    <label>Evaluación:</label>
    <input
      type="text"
      value={evaluacion}
      onChange={(e) => setEvaluacion(e.target.value)}
      style={styles.input}
    />
  </div>
        {/* Puedes agregar el resto de los campos aquí siguiendo el mismo patrón */}
        <button type="submit" style={styles.button}>Guardar Registro Grupal</button>
      </form>
    </div>
  );
};

// Estilos en objeto JS
const styles = {
  container: {
    backgroundColor: '#E0BBE4', // Fondo morado claro
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#6A0DAD', // Botón morado oscuro
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '50%',
    marginTop: '20px',
  }
};

export default RegistroGrupalForm;
