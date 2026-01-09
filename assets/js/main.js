// 1. Importar solo el componente de Modal
import Modal from '../../node_modules/bootstrap/js/dist/modal';

// 2. Inicialización automática (vía atributos de datos HTML)
// No necesitas hacer nada más si usas data-bs-toggle="modal" en tu HTML.

// 3. Inicialización manual (Opcional)
const modal = new Modal(document.getElementById('myModal'))

// Ejemplo: abrir el modal por código
// miModalInstancia.show();