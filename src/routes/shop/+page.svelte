<script>
    // import from components
    import Space from '../../components/design/space.svelte'
    import Products_list from "../../components/Products_list.svelte";

    // import from styles
    import '../../styles/color.css'

    // import from lib/products
    import img_example from '$lib/img/product/prod_1.png'

    // list the products
    let list_products_stock = [
        {
            name: 'Pan de yuca',
            price: 12000,
            img: img_example,
            status: 'Nuevo',
            discount: 5
        },
        {
            name: 'torta',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 10
        },
        {
            name: 'biscocho',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 8
        },
        {
            name: 'Pan de yuca',
            price: 12000,
            img: img_example,
            status: 'Nuevo',
            discount: 5
        },
        {
            name: 'torta',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 10
        },
        {
            name: 'biscocho',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 8
        },
        {
            name: 'Pan de yuca',
            price: 12000,
            img: img_example,
            status: 'Nuevo',
            discount: 5
        },
        {
            name: 'torta',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 10
        },
        {
            name: 'biscocho',
            price: 212,
            img: img_example,
            status: 'Nuevo',
            discount: 8
        }
]

    let list_products_out_stock = [
        {
            name: 'Pan de yuca',
            price: 12000,
            img: img_example,
            status: 'exhausted',
            discount: 5
        },
        {
            name: 'torta',
            price: 212,
            img: img_example,
            status: 'exhausted',
            discount: 10
        },
        {
            name: 'biscocho',
            price: 212,
            img: img_example,
            status: 'exhausted',
            discount: 8
        }
    ]
</script>

<svelte:head>
    <title>Shop</title>
    <meta content="Description" name="description"/>
</svelte:head>

<div>

    <Space/>

    <div class="container_1 flex_center">
        <div class="sub_container_1">
            <div class="publisher_1 publisher_root">
            </div>
            <div class="publisher_2 publisher_root"></div>
            <div class="publisher_3 publisher_root"></div>
            <div class="publisher_4 publisher_root"></div>
        </div>
    </div>

    <Space/>

    <div class="container_2">
        <div class="sub_container_1">
            <h2>los recién llegados </h2>
            <div class="list_products_stock">
                {#each list_products_stock as item}
                    <Products_list Item={item}/>
                {/each}
            </div>
        </div>
    </div>

    <Space/>

    <div class="container_3">
        <div class="sub_container_1">
            <div class="publisher_1 publisher_root"></div>
        </div>
    </div>

    <Space/>

    <div class="container_4">
        <div class="sub_container_1">
            <h2>Si unidades para la venta</h2>
            <div class="list_products_stock">
                {#each list_products_out_stock as item}
                    <Products_list Item={item}/>
                {/each}
            </div>
        </div>
    </div>

    <Space/>

    <div class="container_5">
        <div class="sub_container_1">
            <div class="publisher_1 publisher_root"></div>
        </div>
    </div>
    <Space/>
</div>

<style>
    .flex_center {
        display: flex;
        justify-content: space-evenly;
    }

    .publisher_root {
        background: var(--color-C);
        border-radius: 10px;
    }

    .container_1 {
        & .sub_container_1 {
            display: grid;
            grid-template-columns: repeat(4, auto);
            grid-template-rows: repeat(2, auto);
            width: 80%;
            height: 470px;
            grid-column-gap: 10px;
            grid-row-gap: 10px;
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
        margin: 0 var(--padding-page) 0 var(--padding-page);
        & .sub_container_1 {
            & .list_products_stock{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
            }
            & h2{
                text-align: center;
                font-weight: normal;
                font-size: 40px;
            }
        }

    }

    .container_3 {
        margin: 0 var(--padding-page) 0 var(--padding-page);
        & .sub_container_1{
            & .publisher_1{
                width: 100%;
                height: 500px;
                background-color: var(--color-C);
            }
        }
    }

    .container_4 {
        margin: 0 var(--padding-page) 0 var(--padding-page);
        & .sub_container_1 {
            & .list_products_stock{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
            }
            & h2{
                text-align: center;
                font-weight: normal;
                font-size: 40px;
            }
        }

    }

    .container_5 {
        margin: 0 var(--padding-page) 0 var(--padding-page);
        & .sub_container_1{
            & .publisher_1{
                width: 100%;
                height: 500px;
                background-color: var(--color-C);
            }
        }
    }

</style>