import React, { useEffect } from 'react';
import Colaborators from './Colaborators';

function Modal({ isOpen, onClose }) {
  // Función para manejar el clic fuera del modal
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Cierra el modal solo si se hace clic fuera del contenido
    }
  };

  // Efecto para agregar el evento de clic fuera del modal cuando se abre
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    // Limpia el evento cuando el componente se desmonta o el modal se cierra
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const colaborators = [
    'esteban', 'cristian25', 'franki', 'jeffer511', 'jilvego', 'joofe', 'juank', 'ramiro', 'richangel',
    'sebastian', 'sefase', 'ars', 'D. martin', 'agbr121', 'J. cano', 'camilo', 'david20', 'juandrez', 'yeison',
    'isa', 'birulboy', 'mateo', 'Santi31', 'tania', 'agudelo', 'P. marin', 'colicos77'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 -ml-10 mg z-1000 flex justify-center items-center" onClick={handleOutsideClick}>
      <div className="w-11/12 max-w-lg bg-white border-gray-200 rounded-lg shadow-lg overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Colaboradores</h2>
          <div className="grid grid-cols-4 gap-2">
            {colaborators.map((colaborator) => (
              <Colaborators key={colaborator} colaborator={colaborator} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
