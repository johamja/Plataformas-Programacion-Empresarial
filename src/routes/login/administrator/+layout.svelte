<script>
    import MediaQuery from 'svelte-media-query'

    import {page} from "$app/stores";
    import Button from "../../../components/Button.svelte";

    import inventory from '$lib/icons/administrator/inventory.png'
    import inventory_black from '$lib/icons/administrator/inventory_black.png'
    import products from '$lib/icons/administrator/products.png'
    import shopping_black from '$lib/icons/administrator/shopping_black.png'
    import shopping from '$lib/icons/administrator/shopping.png'
    import products_black from '$lib/icons/administrator/products_black.png'

    $: rute = $page.url.pathname.toString()
</script>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <div class="app" style="display: contents">
            <main style="display: contents">
                <div class="content">
                    <div class="options">
                        <a href="/" class="text">
                            <h2>Panyucando</h2>
                        </a>
                        <nav class="nav">
                            <a class="option" href="/login/administrator"
                               aria-current={rute === '/login/administrator' ? 'page' : undefined}>
                                <div>
                                    <img alt="inventory"
                                         src="{rute === '/login/administrator' ? inventory_black : inventory}">
                                    <h4>Inventario</h4>
                                </div>
                            </a>
                            <a class="option" href="/login/administrator/shopping"
                               aria-current={rute === '/login/administrator/shopping' ? 'page' : undefined}>
                                <div>
                                    <img alt="shopping"
                                         src="{rute === '/login/administrator/shopping' ? shopping_black : shopping}">
                                    <h4>Compras</h4>
                                </div>
                            </a>
                            <a class="option" href="/login/administrator/products"
                               aria-current={rute === '/login/administrator/products' ? 'page' : undefined}>
                                <div>
                                    <img alt="products"
                                         src="{rute === '/login/administrator/products' ? products_black : products}">
                                    <h4>Productos</h4>
                                </div>
                            </a>
                        </nav>
                        <Button Variant="Variant1" Text="Cerrar sesión"/>
                    </div>
                    <div class="slot">
                        <slot/>
                    </div>
                </div>
            </main>
        </div>
        <style>
            .content {
                display: flex;
                height: 100%;
                width: 100%;
                column-gap: 24px;

                .options {
                    display: flex;
                    flex-direction: column;
                    height: initial;
                    justify-content: space-between;
                    padding: 24px;
                    width: 202px;
                    background-color: var(--color-A);
                    color: var(--color-B);

                    .text {
                        text-decoration: none;
                        color: var(--color-B);
                    }

                    & .nav {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;

                        & .option[aria-current='page'] {
                            text-decoration: none;

                            & div {
                                display: flex;
                                gap: 24px;
                                padding: 4px 15px;
                                background-color: var(--color-B);
                                color: var(--color-text);
                                border-radius: var(--redondeo_elementos);
                            }
                        }

                        & .option {
                            text-decoration: none;

                            & div {
                                display: flex;
                                gap: 24px;
                                padding: 4px 15px;
                                align-items: center;
                                color: var(--color-B);

                                & img {
                                    height: 24px;
                                    width: 24px;
                                }
                            }
                        }
                    }

                    & .button {
                        width: inherit;
                    }

                }

                .slot {
                    margin-bottom: 0;
                    overflow-x: auto;
                    overflow-y: auto;
                    max-height: inherit;
                    width: inherit;
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