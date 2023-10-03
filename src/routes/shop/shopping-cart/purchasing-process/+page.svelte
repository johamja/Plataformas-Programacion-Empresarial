<script>
    import MediaQuery from 'svelte-media-query'

    import Space from '../../../../components/design/space.svelte'
    import StepToFollow from "../../../../components/StepToFollow.svelte";
    import {list_shopping_cart} from "../List_ShoppingCart.js";
    import Product from "../../../../components/Product.svelte";
    import Input from "../../../../components/Input.svelte";
    import Button from "../../../../components/Button.svelte";

    let status = true

</script>

<svelte:head>
    <title>Purchasing process</title>
    <meta content="Description" name="description"/>
</svelte:head>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>

        <div class="container_1 container_flex">
            <div class="container_1_1">
                <StepToFollow Number={1} Text="Confirmar pedido"/>
                <div class="container_1_1_1">
                    <div class="list">
                        {#each list_shopping_cart as item}
                            <Product Variant="bill" Item={item}/>
                        {/each}
                    </div>
                    <div class="container_1_1_1_1">
                        <p>Total a pagar: $ 102.209,00</p>
                        <div class="container_1_1_1_1_1">
                            <a href="/shop/shopping-cart">
                                <h3>Editar la lista</h3>
                            </a>
                            <a href="">
                                <h3>Siguiente</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_2 container_flex">
            <div class="container_2_1">
                <StepToFollow Number={2} Text="Añade una dirección "/>
                <div class="container_2_1_1">
                    <form>
                        <Input variant="Variant2" Label="Departamento" Name="" Type=""/>
                        <Input variant="Variant2" Label="Municipio" Name="" Type=""/>
                        <Input variant="Variant2" Label="Barrio" Name="" Type=""/>
                        <Input variant="Variant2" Label="Dirección" Name="" Type=""/>
                    </form>
                    <a href="">
                        <h3>Siguiente</h3>
                    </a>
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_3 container_flex">
            <div class="container_3_1">
                <StepToFollow Number={3} Text="Añade datos de facturacion"/>
                <div class="container_3_1_1">
                    <form>
                        <Input variant="Variant2" Label="Nombre" Name="" Type=""/>
                        <Input variant="Variant2" Label="Apellido" Name="" Type=""/>
                        <Input variant="Variant2" Label="Numero de documento" Name="" Type=""/>
                        <Input variant="Variant2" Label="Correo" Name="" Type=""/>
                        <Input variant="Variant2" Label="Telefono" Name="" Type=""/>
                    </form>
                    <a href="">
                        <h3>Siguiente</h3>
                    </a>
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_4 container_flex">
            <div class="container_4_1">
                <StepToFollow Number={4} Text="Selecciona el método de pago"/>
                <div class="container_4_1_1">
                    <div class="container_4_1_1_1">
                        <button on:click={()=>{status = true}} aria-current={status === true ? 'page' : undefined}>
                            Tarjeta de crédito
                        </button>
                        <button on:click={()=>{status = false}} aria-current={status === false ? 'page' : undefined}>
                            Transferencia
                        </button>
                    </div>
                    {#if (status)}
                        <form>
                            <Input variant="Variant2" Label="Numero de tarjeta " Name="" Type=""/>
                            <Input variant="Variant2" Label="Fecha de expiracion" Name="" Type=""/>
                            <Input variant="Variant2" Label="CVV" Name="" Type=""/>
                            <Input variant="Variant2" Label="Numero de cuotas" Name="" Type=""/>
                            <Input variant="Variant2" Label="Nombre titular" Name="" Type=""/>
                            <Input variant="Variant2" Label="Documento titular" Name="" Type=""/>
                        </form>
                    {:else}
                        <div class="container_4_1_1_2">
                            <p>Código de compra: 2389162401902</p>
                            <table>
                                <tr>
                                    <th>Bancolombia</th>
                                    <th>Numero de cuenta</th>
                                    <th>100235342312</th>
                                </tr>
                                <tr>
                                    <th>Davivienda</th>
                                    <th>Numero de cuenta</th>
                                    <th>100235342312</th>
                                </tr>
                                <tr>
                                    <th>Nequi</th>
                                    <th>Numero de cuenta</th>
                                    <th>3105671230</th>
                                </tr>
                            </table>
                        </div>
                    {/if}
                    <a href="">
                        <h3>Siguiente</h3>
                    </a>
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_5 container_flex">
            <div class="container_5_1">
                <StepToFollow Number={5} Text="Finalizar compra"/>
                {#if (status)}
                    <div class="container_5_1_1">
                        <div class="container_5_1_1_1">
                            <input type="checkbox" name="" id="">
                            <div><p class="Bold">Acepta términos y condiciones de la plataforma</p></div>
                        </div>
                        <Button Variant="Variant1" Text="Confirmar pago"></Button>
                    </div>
                {:else }
                    <div class="container_5_1_1">
                        <div class="container_5_1_1_1">
                            <input type="checkbox" name="" id="">
                            <div>
                                <p class="Bold">Acepta términos y condiciones de la plataforma</p>
                                <p>Tu pedido se notificara via correo electrónico cuando se aya realizado</p>
                            </div>
                        </div>
                        <Button Variant="Variant1" Text="Confirmar pago"></Button>
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

                    & .container_1_1_1 {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        padding: 24px;
                        background-color: var(--color-C);
                        border-radius: var(--redondeo_elementos);

                        & .list {
                            height: inherit;
                            display: flex;
                            flex-direction: column;
                            gap: 24px;
                        }

                        & .container_1_1_1_1 {
                            display: flex;
                            flex-direction: column;
                            gap: 24px;
                            align-items: center;

                            & .container_1_1_1_1_1 {
                                display: flex;
                                gap: 24px;

                                & a {
                                    text-decoration: none;
                                    color: var(--color-A);
                                }
                            }
                        }
                    }
                }
            }

            .container_2 {
                & .container_2_1 {
                    width: var(--tamaño_de_contenedor);

                    & .container_2_1_1 {
                        padding: 24px;
                        background-color: var(--color-C);
                        border-radius: var(--redondeo_elementos);
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        align-items: center;

                        & form {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            row-gap: 24px;
                        }

                        & a {
                            text-decoration: none;
                            color: var(--color-A);
                        }
                    }
                }
            }

            .container_3 {
                & .container_3_1 {
                    width: var(--tamaño_de_contenedor);

                    & .container_3_1_1 {
                        padding: 24px;
                        background-color: var(--color-C);
                        border-radius: var(--redondeo_elementos);
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        align-items: center;

                        & form {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            row-gap: 24px;
                        }

                        & a {
                            text-decoration: none;
                            color: var(--color-A);
                        }
                    }
                }
            }

            .container_4 {
                & .container_4_1 {
                    width: var(--tamaño_de_contenedor);

                    & .container_4_1_1 {
                        width: initial;
                        padding: 24px;
                        background-color: var(--color-C);
                        border-radius: var(--redondeo_elementos);
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        align-items: center;

                        & .container_4_1_1_1 {
                            display: flex;
                            gap: 24px;

                            & button[aria-current='page'] {
                                color: var(--color-A);
                                transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                            }

                            & button {
                                background: none;
                                border: none;
                                color: var(--color-text);
                                font-family: Inter, serif;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: normal;
                            }

                        }

                        & form {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            row-gap: 24px;
                        }

                        & .container_4_1_1_2 {
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            gap: 24px;
                            align-items: center;

                            & table {
                                width: inherit;
                                border-spacing: 24px;
                                color: var(--color-text);
                                font-family: Inter, serif;
                                font-size: 15px;
                                font-style: normal;
                                line-height: normal;
                                text-align: start;
                            }
                        }

                        & a {
                            text-decoration: none;
                            color: var(--color-A);
                        }

                    }
                }
            }

            .container_5 {
                & .container_5_1 {
                    width: var(--tamaño_de_contenedor);

                    & .container_5_1_1 {
                        padding: 24px;
                        border-radius: var(--redondeo_elementos);
                        background-color: var(--color-C);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        & .container_5_1_1_1 {
                            display: flex;
                            gap: 24px;

                            & div {
                                display: flex;
                                flex-direction: column;
                                gap: 24px;
                            }
                        }
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