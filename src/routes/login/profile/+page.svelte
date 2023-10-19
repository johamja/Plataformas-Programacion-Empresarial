<script>
    import MediaQuery from 'svelte-media-query'
    import Space from "../../../components/design/space.svelte";
    import Button from "../../../components/Button.svelte";
    import Input from "../../../components/Input.svelte";
    import user from "../../../UserStore.js"
    let edit = true
    let info = 'Valor del elemento'
</script>

<svelte:head>
    <title>Profile</title>
    <meta content="Description" name="description"/>
</svelte:head>


<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>

        <div class="container_1 container_flex">
            <div class="container_1_1">
                <h2>My perfil</h2>
                <h3>Información personal</h3>
                {#if (edit)}
                    <div class="info">
                        <div class="box">
                            <p class="Bold">Nombre</p>
                            <p>{$user.nombre}</p>
                        </div>
                        <div class="box">
                            <p class="Bold">Apellido</p>
                            <p>{$user.apellido}</p>
                        </div>
                        <div class="box">
                            <p class="Bold">Telefono</p>
                            <p>{$user.telefono}</p>
                        </div>
                        <div class="box">
                            <p class="Bold">Numero de documento</p>
                            <p>{$user.n_documento}</p>
                        </div>
                    </div>
                {:else}
                    <form class="info">
                        <Input variant="Variant3" Label="Nombre"/>
                        <Input variant="Variant3" Label="Apellido"/>
                        <Input variant="Variant3" Label="Telefono"/>
                        <Input variant="Variant3" Label="Numero de documento"/>
                    </form>
                {/if}
                <h3>Información de envió</h3>
                {#if (edit)}
                    <div class="info">
                        <div class="box">
                            <p class="Bold">Departamento</p>
                            <p>{info}</p>
                        </div>
                        <div class="box">
                            <p class="Bold">Municipio</p>
                            <p>{info}</p>
                        </div>
                        <div class="box">
                            <p class="Bold">Barrio</p>
                            <p>{info}</p>
                        </div>
                        <div class="box">
                            <p class="Bold">Dirección</p>
                            <p>{info}</p>
                        </div>
                    </div>
                    <div class="options">
                        <Button Variant="Variant2" Text="Editar my perfil" Function="{()=>{edit = !edit}}"/>
                        <Button Variant="Variant2" Text="Cerrar sesión"/>
                    </div>
                {:else}
                    <form class="info">
                        <Input variant="Variant3" Label="Departamento"/>
                        <Input variant="Variant3" Label="Municipio"/>
                        <Input variant="Variant3" Label="Barrio"/>
                        <Input variant="Variant3" Label="Dirección"/>
                    </form>
                    <div class="options">
                        <Button Variant="Variant2" Text="Guardar cambios"/>
                        <Button Variant="Variant2" Text="Cancelar" Function="{()=>{edit = !edit}}"/>
                    </div>
                {/if}
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

                    & .info {
                        display: flex;
                        flex-wrap: wrap;
                        row-gap: 24px;
                        justify-content: space-between;
                        padding: 24px;

                        & .box {
                            width: 450px;
                        }

                    }

                    & .options {
                        display: flex;
                        width: inherit;
                        justify-content: space-around;
                    }
                }
            }
        </style>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            Header no disponible
        </div>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            Header no disponible
        </div>
    {/if}
</MediaQuery>