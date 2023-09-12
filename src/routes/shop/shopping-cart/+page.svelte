<script>
    import Itemshoppingcart from "../../../components/Itemshoppingcart.svelte";
    import Space from '../../../components/design/space.svelte'
    import img_example from "$lib/img/product/prod_1.png";

    let list_shopping_cart = [
        {
            name: 'Pan de yuca',
            price: 12000,
            img: img_example,
            status: 'Nuevo',
            discount: 5,
            count: 1
        },
        {
            name: 'torta',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 10,
            count: 1
        },
        {
            name: 'biscocho',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 8,
            count: 1
        },
        {
            name: 'Pan de yuca',
            price: 12000,
            img: img_example,
            status: 'Nuevo',
            discount: 5,
            count: 1
        }
    ]
</script>

<svelte:head>
    <title>Shop</title>
    <meta content="Description" name="description"/>
</svelte:head>

<div class="container">
    <Space/>
    <h1>Tu lista de compras</h1>

    <div class="container_1">
        {#each list_shopping_cart as item}
            <Itemshoppingcart Item={item}/>
        {/each}
    </div>
    <Space/>
    <div class="container_2">
        <div class="sub_container_1">
            <button>Realizar pago</button>
        </div>
        <div class="sub_container_2">
            <h1>Total del carrito</h1>
            <table class="tabla_total">
                <tbody>
                <tr class="border">
                    <td>Subtotal</td>
                    <td>2324</td>
                </tr>
                <tr class="border">
                    <td>Envió</td>
                    <td>3242</td>
                </tr>
                <tr >
                    <td>Total</td>
                    <td>234</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Space/>
</div>

<style>
    .container {
        margin: 0 var(--padding-page) 0 var(--padding-page);

        & h1 {
            text-align: center;
        }
    }

    .container_2 {
        background-color: var(--color-C);
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        & .sub_container_1{
            width: 45%;
            & button {
                border-radius: 10px;
                background-color: var(--color-A);
                width: 80%;
                height: 50px;
                color: var(--color-B);
                border-block-start: none;
                border-block-end: none;
                border-inline-end: none;
                border-inline-start: none;
                box-shadow: var(--sombra);
                margin: 15px;
                text-align: center;
                font-family: Courgette,serif;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;

            }
        }

        & .sub_container_2 {
            width: 45%;

            & .tabla_total {
                border-radius: 10px;
                border: 1px solid black;
                width: 100%;
                background-color: var(--color-B);
                box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.25);
                & tr{
                    display: flex;
                    justify-content: space-around;
                }

                & .border {
                    border-bottom: 1px solid black;
                }

                & td {
                    padding: 10px;
                }


            }
        }




    }
</style>