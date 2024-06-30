// Modal.jsx
import React from 'react';
import Colaborators from './Colaborators';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const colaborators = ['esteban',
    'cristian_25',
    'franki',
    'jeffer511',
    'jilvego',
    'joofe',
    'juank',
    'ramiro pinchado',
    'richangel',
    'sebastian',
    'sefase',
    'ars',
    'david martin',
    'agbr121',
    'juan cano',
    'camilo',
    'david20',
    'juandrez',
    'yeison',
    'isa',
    'birulboy',
    'mateo',
    'santiago gome',
    'tania',
    'agudelo',
    'pablo marin',
    'colicos77']

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {
            colaborators.map((colaborator) => (
                <Colaborators key={colaborator} colaborator={colaborator} />
                ))                                                          
        }

        {/* Botón para cerrar el modal */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal;