import { writable } from 'svelte/store';

const user = writable({
  Uid: null,
  nombre: null,
  apellido:null,
  telefono:null,
  n_documento:null,
  rol: null
});

export default user;