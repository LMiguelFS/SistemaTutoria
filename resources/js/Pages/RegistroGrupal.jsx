import React from 'react';
import RegistroGrupalForm from '../components/RegistroGrupalForms';

const RegistroGrupal = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Registro Grupal de Alumnos</h1>
      <RegistroGrupalForm />
    </div>
  );
};

export default RegistroGrupal;