<script>
    import MediaQuery from 'svelte-media-query'

    import Button from "../../../../components/Button.svelte";
    import Product from "../../../../components/Product.svelte";
    import {List_Products} from './List_Products.js'
    import Space from "../../../../components/design/space.svelte";
    import Input from "../../../../components/Input.svelte";

    let showModal = false
    let dialog // HTMLDialogElement
    $: if (dialog && showModal) dialog.showModal()
</script>

<svelte:head>
    <title>Products</title>
    <meta content="Description" name="description"/>
</svelte:head>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>
        <div class="container_1">
            <h2>Productos</h2>
            <Button Variant="Variant2" Text="Añadir producto" Function="{() => (dialog.showModal())}"/>
            <dialog bind:this={dialog}
                    on:close={() => (showModal = false)}>
                <div class="header">
                    <h2>Insertar un nuevo producto</h2>
                    <button class="button">Subir imagen</button>
                </div>
                <form>
                    <Input Label="Nombre" variant="Variant3"/>
                    <Input Label="Precio" variant="Variant3"/>
                    <Input Label="Descripción" variant="Variant3"/>
                    <div class="buttons">
                        <button class="button" id="close" on:click={() => dialog.close()}>Cancelar</button>
                        <button class="button">Añadir</button>
                    </div>
                </form>
            </dialog>
            <div class="list">
                {#each List_Products as item}
                    <Product Variant="CRUD" Item="{item}"/>
                {/each}
            </div>
        </div>
        <style>
            .container_1 {
                display: flex;
                flex-direction: column;
                gap: 24px;
                padding: 24px;

                & dialog {
                    border: 0;
                    border-radius: var(--redondeo_elementos);

                    & button {
                        border-radius: 10px;
                        background-color: var(--color-A);
                        color: var(--color-B);
                        border-block-start: none;
                        border-block-end: none;
                        border-inline-end: none;
                        border-inline-start: none;
                        box-shadow: var(--sombra);
                        text-align: center;
                        font-family: Inter, serif;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                    }

                    & .button {
                        width: 200px;
                        height: 45px;
                    }

                    & .header {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 24px;
                        gap: 24px;
                    }

                    & form {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;

                        & .buttons {
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                }

                & dialog::backdrop {
                    background: rgba(0, 0, 0, 0.69);
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