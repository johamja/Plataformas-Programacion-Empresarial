import user from '../../UserStore.js'
/** @type {import('./$types').Actions} */
export const actions = {
    authentication: async ({ cookies, request }) => {
      try {
        const data = await request.formData();
        const email = data.get('correo');
        const password = data.get('contraseña');
  
        const formData = {
          "email": email,
          "password": password
        };
  
        const response = await fetch('http://localhost:3000/login/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          const userData = await response.json();
          // Suponiendo que tienes un "store" global llamado "userStore"
          // y que almacenará la información del usuario
          console.log(userData)
          console.log(userData.nombre)
          user.update(value => ({
            ...value,
            nombre: userData.nombre,
            apellido:userData.apellido,
            rol: userData.rol
          }));
          user.subscribe(value => {
            console.log('Datos actualizados en UserStore:', value);
          });
          
          
          return { success: true, userData };
        } else {
          console.error('Error en la solicitud fetch:', response.statusText);
          return { success: false, error: 'Error en la solicitud fetch' };
        }
      } catch (error) {
        console.error('Error en la solicitud fetch:', error);
        return { success: false, error: 'Error en la solicitud fetch' };
      }
    }
  };