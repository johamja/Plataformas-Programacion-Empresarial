/** @type {import('./$types').PageServerLoad} */
// export async function load({ cookies }) {
//     const user = await db.getUserFromSession(cookies.get('sessionid'));
//     return { user };
// }


/** @type {import('./$types').Actions} */
export const actions = {


    not_authenticated: async ({ cookies, request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const description = data.get('description');

        const formData = {
            name: name,
            email: email,
            description: description
        };

        await fetch('http://localhost:3000/information_sin_auth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        return { success: true };
    },

    authenticated: async ({ cookies, request }) => {
        const data = await request.formData();
        const description = data.get('description');

        const formData = {
            description: description
        };

        await fetch('http://localhost:3000/information',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        return { success: true };
    }
};