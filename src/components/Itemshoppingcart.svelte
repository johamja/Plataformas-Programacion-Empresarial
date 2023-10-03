<script>
    export let Item

    let name = Item.name
    let price = Item.price
    let img = Item.img
    let count = Item.count
</script>

<div class="container">
    <div class="container_1 flex_row">
        <div>
            <img alt="{img.toString()}" src={img}>
        </div>
        <div class="flex_column center_vertical">
            <p class="name">{name}</p>
            <p class="price">$ {price}</p>
        </div>
    </div>

    <div class="container_2 flex_row ">
        <button>-</button>
        <h2>{count}</h2>
        <button>+</button>
    </div>

    <div class="container_3">
        <button>Eliminar</button>
    </div>
</div>

<style>
    .flex_row {
        display: flex;
        flex-direction: row;
    }

    .flex_column {
        display: flex;
        flex-direction: column;
    }

    .center_vertical {
        justify-content: center;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: var(--color-C);
        margin: 20px;
        border-radius: 10px;
    }

    .container_1 {
        & img {
            height: 110px;
            width: 110px;
            margin: 15px;
        }

        & .name {
            margin: 2px;

        }

        & .price {
            margin: 2px;
            font-weight: bold;
        }
    }

    .container_2 {
        & button {
            border-radius: 10px;
            background-color: var(--color-B);
            padding: 0 30px 0 30px;
            height: 40px;
            border-block-start: none;
            border-block-end: none;
            border-inline-end: none;
            border-inline-start: none;
            box-shadow: var(--sombra);
            margin: 15px;

        }
    }

    .container_3 {
        & button {
            border-radius: 10px;
            background-color: var(--color-A);
            padding: 0 70px 0 70px;
            height: 40px;
            color: var(--color-B);
            border-block-start: none;
            border-block-end: none;
            border-inline-end: none;
            border-inline-start: none;
            box-shadow: var(--sombra);
            margin: 15px;

        }
    }
</style>