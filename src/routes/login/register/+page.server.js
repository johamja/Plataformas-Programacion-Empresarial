
/** @type {import('./$types').Actions} */
export const actions = {


    not_authenticated: async ({ cookies, request }) => {
        try {
            const data = await request.formData();
            const name = data.get('Nombre');
            const secondname = data.get('Apellido');
            const email = data.get('Correo');
            const password = data.get('Contraseña');
    
            const formData = {
                "name": name,
                "secondname": secondname,
                "email": email,
                "password": password
            };
    
            await fetch('http://localhost:3000/login/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            
            return { success: true};
        } catch (error) {
            console.error('Error en la solicitud fetch:', error);
            return { success: false, error: 'Error en la solicitud fetch' };
        }
    }

};