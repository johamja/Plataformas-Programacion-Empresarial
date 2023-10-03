<script>
    import Facebook from '$lib/icons/facebook.png';
    import Instagram from '$lib/icons/instagram.png';
    import Whatsapp from '$lib/icons/whatsapp.png';
    import {page} from "$app/stores";

    $: rute = $page.url.pathname.toString()
</script>

{#if rute === '/login' || rute === '/login/register'}
    <footer class="footer">
        <div>
            <p>Terminos y condiciones @2023</p>
        </div>
    </footer>
    <style>
        .footer {
            & div {
                & p {
                    color: var(--color-B);
                    margin: 0;
                }
            }
        }
    </style>
{:else }
    <footer class="footer">
        <div class="container">
            <div class="container_1">
                <h3>Tú tienda de confianza te espera</h3>
                <p>Síguenos</p>
                <div>
                    <a href="https://www.facebook.com/">
                        <img src="{Facebook}" alt="Social">
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src="{Instagram}" alt="Social">
                    </a>
                    <a href="https://www.whatsapp.com/">
                        <img src="{Whatsapp}" alt="Social">
                    </a>
                </div>
            </div>
            <div class="container_2">
                <h3>Horas de atención </h3>
                <p>Lunes a Sábado: 8 am – 7:30 pm </p>
                <p> Domingo: 10 am – 7:30 pm</p>
            </div>
            <div class="container_3">
                <h3>Contáctenos</h3>
                <p>🏠 Av. 80 # 48B-03, Medellín </p>
                <p>📞 312 2972822 </p>
                <p>📧 postresamoradulce@gmail.com</p>
            </div>
        </div>
    </footer>
    <style>
        .footer {
            display: flex;
            justify-content: center;
            padding: 24px;
            background-color: var(--color-C);

            & .container {
                width: var(--tamaño_de_contenedor);
                height: 180px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: var(--color-text);

                & .container_1 {
                    & img {
                        margin-right: 5px;
                        height: 25px;
                        width: 25px;
                    }
                }

                & .container_1, & .container_2, & .container_3 {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 10px;
                }
            }
        }
    </style>
{/if}

