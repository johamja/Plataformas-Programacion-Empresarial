<footer>

    <div class="cont_1">
        <h3>Tú tienda de confianza te espera</h3>
        <div>
            <h3>Síguenos</h3>
            <img src="">
            <img src="">
            <img src="">
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
    footer {
        display: grid;
        grid-column: 3;
        background-color: var(--color-A);
        color: var(--color-B);
        padding-left: var(--padding-page);
        padding-right: var(--padding-page);
        padding-top: var(--padding-footer-top-bottom);
        padding-bottom: var(--padding-footer-top-bottom);
        align-items: start;
    }

    h3 , p {
        font-weight: normal;
    }

    .cont_1 {
        grid-column: 1;
    }

    .cont_2 {
        grid-column: 2;
    }

    .cont_3 {
        grid-column: 3;
    }

</style>