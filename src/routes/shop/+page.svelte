<script>
    import MediaQuery from 'svelte-media-query'

    import '../../styles/colors.css'
    import Space from '../../components/design/space.svelte'
    import Product from "../../components/Product.svelte";

    import {list_products_stock} from './List_ProductsStock.js'
    import {list_products_out_stock} from './List_ProductsOutStock.js'
</script>

<svelte:head>
    <title>Shop</title>
    <meta content="Description" name="description"/>
</svelte:head>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>

        <div class="container_1 container_flex">
            <div class="container_1_1">
                <div class="publisher_1 publisher_root"></div>
                <div class="publisher_2 publisher_root"></div>
                <div class="publisher_3 publisher_root"></div>
                <div class="publisher_4 publisher_root"></div>
            </div>
        </div>

        <Space/>

        <div class="container_2 container_flex">
            <div class="container_2_1">
                <h2>los recién llegados </h2>
                <div class="list">
                    {#each list_products_stock as item}
                        <Product Variant="shop" Item={item}/>
                    {/each}
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_3 container_flex">
            <div class="container_3_1">
                <div class="publisher_1 publisher_root"></div>
            </div>
        </div>

        <Space/>

        <div class="container_4 container_flex">
            <div class="container_4_1">
                <h2>Sin unidades para la venta</h2>
                <div class="list">
                    {#each list_products_out_stock as item}
                        <Product Variant="shop" Item={item}/>
                    {/each}
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_5 container_flex">
            <div class="container_5_1">
                <div class="publisher_1 publisher_root"></div>
            </div>
        </div>
        <Space/>

        <style>
            .container_1 {
                & .container_1_1 {
                    display: grid;
                    grid-template-columns: repeat(4, auto);
                    grid-template-rows: repeat(2, auto);
                    width: var(--tamaño_de_contenedor);
                    height: 470px;
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;

                    & .publisher_root {
                        background-color: var(--color-C);
                        border-radius: var(--redondeo_elementos);
                    }

                    & .publisher_1 {
                        grid-column: 1/3;
                        grid-row: 1/3;
                    }

                    & .publisher_2 {
                        grid-column: 3/5;
                        grid-row: 1;
                    }

                    & .publisher_3 {
                        grid-column: 3;
                        grid-row: 2;
                    }

                    & .publisher_4 {
                        grid-column: 4;
                        grid-row: 2;
                    }
                }
            }

            .container_2 {
                & .container_2_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;

                    & .list {
                        width: inherit;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        gap: 24px;
                    }
                }
            }

            .container_3 {
                & .container_3_1 {
                    width: var(--tamaño_de_contenedor);

                    & .publisher_1 {
                        width: 100%;
                        height: 500px;
                        background-color: var(--color-C);
                        border-radius: var(--redondeo_elementos);
                    }
                }
            }

            .container_4 {
                & .container_4_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;

                    & .list {
                        width: inherit;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        gap: 24px;
                    }
                }
            }

            .container_5 {
                & .container_5_1 {
                    width: var(--tamaño_de_contenedor);

                    & .publisher_1 {
                        width: 100%;
                        height: 500px;
                        background-color: var(--color-C);
                        border-radius: var(--redondeo_elementos);
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