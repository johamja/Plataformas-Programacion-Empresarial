<script>
    import MediaQuery from 'svelte-media-query'
    import Space from '../../../components/design/space.svelte'

    import {list_shopping_cart} from './List_ShoppingCart.js'
    import Product from "../../../components/Product.svelte";
    import Button from "../../../components/Button.svelte";
</script>

<svelte:head>
    <title>Shop cart</title>
    <meta content="Description" name="description"/>
</svelte:head>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>
        <div class="container_1 container_flex">
            <div class="container_1_1">
                <h2>Tu lista de compras</h2>
                <div class="list">
                    {#each list_shopping_cart as item}
                        <Product Variant="shopping cart" Item={item}/>
                    {/each}
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_2 container_flex">
            <div class="container_2_1">
                <h2>Resumen de la compra</h2>
                <p>Subtotal de la factura:</p>
                <p>Descuento:</p>
                <p>Total: </p>
                <Button Variant="Variant2" Text="Pagar"/>
            </div>
        </div>

        <Space/>
        <style>
            .container_1 {
                & .container_1_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;

                    & .list {
                        width: inherit;
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                }
            }

            .container_2 {
                & .container_2_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
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