<script>
    import MediaQuery from 'svelte-media-query'

    import Space from "../../components/design/space.svelte"
    import Button from "../../components/Button.svelte";
    import Input from "../../components/Input.svelte";
</script>

<svelte:head>
    <title>Information</title>
    <meta content="Description" name="description"/>
</svelte:head>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>

        <div class="container_1 container_flex">
            <div class="container_1_1">
                <h2>Comunícate con nosotros </h2>
                <form action="?/not_authenticated" method="POST">
                    <div>
                        <Input variant="Variant3" Label="Nombre" Name="name" Type="text"/>
                        <Input variant="Variant3" Label="Correo" Name="email" Type="text"/>
                        <Input variant="Variant3" Label="Descricion" Name="description" Type="text"/>
                    </div>
                    <Button Type="submit" Text="Enviar" Variant="Variant2"/>
                </form>
                <form action="?/authenticated" method="POST">
                    <div>
                        <Input variant="Variant3" Label="Descricion" Name="description" Type="text"/>
                    </div>
                    <Button Type="submit" Text="Enviar" Variant="Variant2"/>
                </form>
            </div>
        </div>

        <Space/>

        <div class="container_2 container_flex">
            <div class="container_2_1">
                <h2>Puedes encontrarnos en Cra. 47 #50-75 Loca 105 </h2>
                <iframe
                        height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.78052336330694!2d-75.56628653708843!3d6.2493650725370795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f8896a73f3%3A0xc3a30926a6f6286d!2sPanader%C3%ADa%20y%20Pasteler%C3%ADa%20Astoria!5e0!3m2!1ses-419!2sco!4v1692655167350!5m2!1ses-419!2sco"
                        title="maps">
                </iframe>
            </div>
        </div>

        <Space/>

        <div class="container_3 container_flex">
            <div class="container_3_1">
                <h2>Puedes encontrarnos en tus redes sociales</h2>
                <div class="container_3_1_1">
                    <Button Variant="Variant4" SocialNetwork="facebook"/>
                    <Button Variant="Variant4" SocialNetwork="instagram"/>
                    <Button Variant="Variant4" SocialNetwork="whatsapp"/>
                </div>
            </div>
        </div>

        <Space/>

        <style>
            .container_1 {
                & .container_1_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    align-items: center;

                    & form {
                        width: inherit;
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        align-items: center;

                        & div {
                            width: inherit;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-around;
                            row-gap: 24px;
                        }
                    }
                }
            }

            .container_2 {
                & .container_2_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    align-items: center;

                    & iframe {
                        width: inherit;
                        border-radius: var(--redondeo_elementos);
                        border: 2px solid var(--color-A);
                    }
                }
            }

            .container_3 {
                & .container_3_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    align-items: center;

                    & .container_3_1_1 {
                        width: inherit;
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        </style>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            tablet
        </div>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            teléfono
        </div>
    {/if}
</MediaQuery>

