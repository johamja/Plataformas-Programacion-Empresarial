<script>
    import ButtonSocial from "../../components/ButtonSocial.svelte";
    import Space from "../../components/design/space.svelte"
</script>

<svelte:head>
    <title>Information</title>
    <meta content="Description" name="description"/>
</svelte:head>

<div class="container_1 flex">
    <h2 class="titulos">Comunícate con nosotros </h2>
    <form action="" method="post">
        <div class="">
            <label class="Input1">
                <p>Nombre</p>
                <input id="name" name="Nombre" type="text">
            </label>
            <label class="Input1">
                <p>Correo electronico</p>
                <input id="email" name="Correo electronico" type="email">
            </label>
        </div>
        <div>
            <label class="Input1">
                <p>Que estas buscando?</p>
                <input id="Description" name="Que estas buscando?" type="text">
            </label>
        </div>
        <button type="submit">Enviar</button>
    </form>
</div>

<Space/>

<div class="container_2 flex">
    <h2 class="titulos">Puedes encontrarnos en Cra. 47 #50-75 Loca 105 </h2>
    <div>
        <iframe
                height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.78052336330694!2d-75.56628653708843!3d6.2493650725370795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f8896a73f3%3A0xc3a30926a6f6286d!2sPanader%C3%ADa%20y%20Pasteler%C3%ADa%20Astoria!5e0!3m2!1ses-419!2sco!4v1692655167350!5m2!1ses-419!2sco"
                title="maps">
        </iframe>
    </div>
</div>

<Space/>

<div class="container_3 flex">
    <h2 class="titulos">
        Puedes encontrarnos en tus redes sociales
    </h2>
    <div class="social">
        <ButtonSocial Tipo="0"/>
        <ButtonSocial Tipo="1"/>
        <ButtonSocial Tipo="2"/>
    </div>
</div>

<Space/>


<style>

    .titulos {
        font-size: 20px;
        font-weight: normal;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        & div {
            width: 100%;
            margin: 15px;
            display: flex;
            justify-content: space-evenly;
        }

        & button {
            border-radius: 10px;
            background-color: var(--color-A);
            width: 40%;
            height: 40px;
            color: var(--color-B);
            border-block-start: none;
            border-block-end: none;
            border-inline-end: none;
            border-inline-start: none;
            box-shadow: var(--sombra);
            margin: 15px;

        }
    }

    .Input1 {
        display: flex;
        flex-direction: column;
        width: 40%;

        & p {
            margin: 5px 0 5px 20px;
            font-weight: normal;
            font-size: 15px;
        }

        & input {
            border-radius: 10px;
            border-color: var(--color-C);
            height: 40px;
            background-color: var(--color-C);
            border-block-start: none;
            border-block-end: none;
            border-inline-end: none;
            border-inline-start: none;
            box-shadow: var(--sombra);
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .flex {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form {
        width: 80%;
    }

    form {
        & div {
            display: flex;
        }
    }

    .container_2 {
        & div {
            width: 70%;
        }

        & iframe {
            border-radius: 10px;
            border: var(--color-A) 2px solid;
            width: 100%;
        }
    }

    .container_3 {
        display: flex;
        flex-direction: column;
    }

    .social {
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
</style>


