<script>
    import Facebook from '$lib/icons/facebook.png';
    import Instagram from '$lib/icons/instagram.png';
    import Whatsapp from '$lib/icons/whatsapp.png';
    import {page} from "$app/stores";

    $: rute = $page.url.pathname.toString()
</script>

{#if rute === '/login' || rute === '/login/register'}
    <footer class="footer">
        <p>Terminos y condiciones @2023</p>
    </footer>
    <style>
        .footer {
            position: fixed;
            z-index: 2;
            bottom: 10px;
            left: 20px;

            & p {
                color: var(--color-B);
                text-align: center;
                font-family: Inter, serif;
                font-size: 15px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
    </style>
{:else }
    <footer class="footer">
        <div class="cont_1">
            <h3>Tú tienda de confianza te espera</h3>
            <div>
                <h3>Síguenos</h3>
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
        <div class="cont_2">
            <h3>Horas de atención </h3>
            <p>Lunes a Sábado: 8 am – 7:30 pm <br>
                Domingo: 10 am – 7:30 pm</p>
        </div>
        <div class="cont_3">
            <h3>Contáctenos</h3>
            <p>🏠 Av. 80 # 48B-03, Medellín <br>
                📞 312 2972822 <br>
                📧 postresamoradulce@gmail.com</p>
        </div>
    </footer>
    <style>
        .footer {
            display: grid;
            grid-column: 3;
            background-color: var(--color-A);
            color: var(--color-B);
            padding: var(--padding-footer-top-bottom) var(--padding-page);
            align-items: start;

            & .cont_1 {
                grid-column: 1;

                & img {
                    height: 20px;
                    width: 20px;
                }
            }

            & .cont_2 {
                grid-column: 2;
            }

            & .cont_3 {
                grid-column: 3;
            }

            & h3, & p {
                font-weight: normal;
            }
        }
    </style>
{/if}

