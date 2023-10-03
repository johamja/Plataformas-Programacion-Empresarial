<script>
    import MediaQuery from 'svelte-media-query'

    import Space from '../../../../components/design/space.svelte'
    import {List_Shopping} from "./List_Shopping.js";
</script>

<svelte:head>
    <title>Shopping</title>
    <meta content="Description" name="description"/>
</svelte:head>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>
        <div class="container_1">
            <h2>Historial de compras</h2>
            <div class="table">
                <table>
                    <thead>
                    <tr>
                        <td><h4>Nombre del usuario</h4></td>
                        <td><h4>Nombre del comprador</h4></td>
                        <td><h4>Total de la factura</h4></td>
                        <td><h4>Fecha de facturacion</h4></td>
                    </tr>
                    </thead>
                    <tbody>
                    {#each List_Shopping as item}
                        <tr>
                            <td><p>{item.User_name}</p></td>
                            <td><p>{item.Name_of_the_buyer}</p></td>
                            <td><p>{item.Total_bill}</p></td>
                            <td><p>{item.Billing_date}</p></td>
                        </tr>
                    {/each}
                    </tbody>

                </table>
            </div>
        </div>
        <style>
            .container_1 {
                display: flex;
                flex-direction: column;
                padding: 24px;
                gap: 24px;

                & .table {
                    border: 2px solid var(--color-text);
                    border-radius: 7px;
                    display: flex;
                    overflow: hidden;

                    & table {
                        width: 100%;
                        border-collapse: collapse;

                        & thead {
                            background-color: var(--color-A);
                            color: var(--color-B);

                            & td {
                                padding: 10px 12px;
                            }
                        }

                        & tbody {
                            & th, & td {
                                padding: 7px 12px;
                            }

                            & tr {
                                border-top: 2px solid var(--color-text);
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