import Swal from 'sweetalert2';

export const popError = (message) => {
  return Swal.fire({
    title: 'Error!',
    text: message,
    icon: 'error',
    confirmButtonText: 'Aceptar'
  });
};

export const popSuccess = (message) => {
  return Swal.fire({
    title: 'Éxito!',
    text: message,
    icon: 'success',
    confirmButtonText: 'Cool'
  });
};