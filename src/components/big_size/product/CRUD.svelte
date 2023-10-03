<script>
    import Button from "../../Button.svelte";
    import Input from "../../Input.svelte";

    export let Item

    let img = Item.img
    let name = Item.name
    let price = Item.price

    let showModal = false
    let dialog // HTMLDialogElement
    $: if (dialog && showModal) dialog.showModal()
</script>

<div class="ShoppingCart">
    <div class="container_1_component">
        <div class="img">
            <img alt="" src="{img}">
        </div>
        <div>
            <p>{name}</p>
            <h4>$ {price}</h4>
        </div>
    </div>
    <div class="container_2_component">
        <button class="button" id="open" on:click={() => (dialog.showModal())}>Editar</button>
        <button class="button">Eliminar</button>
        <dialog bind:this={dialog}
                on:close={() => (showModal = false)}>
            <div class="header">
                <h2>Editar producto</h2>
                <button class="button">Subir imagen</button>
            </div>
            <form>
                <Input Label="Nombre" Value="{name}" variant="Variant3"/>
                <Input Label="Precio" Value="{price}" variant="Variant3"/>
                <Input Label="Descripción" variant="Variant3"/>
                <div class="buttons">
                    <button class="button" id="close" on:click={() => dialog.close()}>Cancelar</button>
                    <button class="button">Añadir</button>
                </div>
            </form>
        </dialog>
    </div>
</div>

<style>
    .ShoppingCart {
        display: flex;
        justify-content: space-between;
        padding: 15px;

        & .container_1_component {
            display: flex;
            justify-content: space-between;
            gap: 24px;

            & .img {
                height: 50px;
                width: 50px;

                & img {
                    height: inherit;
                }
            }

            & div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5px;
            }
        }

        & .container_2_component {
            display: flex;
            justify-content: space-between;
            gap: 24px;
            align-items: center;

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

            & dialog {
                border: 0;
                border-radius: var(--redondeo_elementos);

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
    }
</style>