<script>
    import Input from "../../components/Input.svelte";
    import ButtonSocial from "../../components/ButtonSocial.svelte";
</script>

<svelte:head>
    <title>Information</title>
    <meta name="description" content="Description" />
</svelte:head>

<div>
    <h2>Comunícate con nosotros </h2>
    <form action="" method="post">
        <div>
            <Input/>
            <Input/>
        </div>
        <Input/>
        <button type="submit">Enviar</button>
    </form>
</div>

<div>
    <h1>Puedes encontrarnos en Cra. 47 #50-75 Loca 105 </h1>
    <div>
        <iframe allowfullscreen=""
                height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.78052336330694!2d-75.56628653708843!3d6.2493650725370795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f8896a73f3%3A0xc3a30926a6f6286d!2sPanader%C3%ADa%20y%20Pasteler%C3%ADa%20Astoria!5e0!3m2!1ses-419!2sco!4v1692655167350!5m2!1ses-419!2sco"
                style="border:0;"
                width="600"></iframe>
    </div>
</div>

<div>
    <h2>
        Puedes encontrarnos en tus redes sociales
    </h2>
    <div>
        <ButtonSocial/>
        <ButtonSocial/>
        <ButtonSocial/>
    </div>
</div>


