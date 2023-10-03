<script>
    export let Item

    let img = Item.img
    let name = Item.name
    let price = Item.price
    let subtotal = Item.subtotal
    let count = Item.count

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
        <div>
            <p>Subtotal</p>
            <h4>$ {subtotal}</h4>
        </div>
    </div>
    <div class="container_2_component">
        <div class="container_2_1_component">
            <button>-</button>
            <h4>{count}</h4>
            <button>+</button>
        </div>
        <button class="remove">Eliminar</button>
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

            & .container_2_1_component {
                display: flex;
                gap: 24px;
                align-items: center;

                & button {
                    width: 40px;
                    height: 39px;
                }
            }

            & .remove {
                width: 200px;
                height: 39px;
            }
        }
    }
</style>