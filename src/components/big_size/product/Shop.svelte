<script>
    export let Item

    let name = Item.name
    let price = Item.price
    let img = Item.img
    let status = Item.status
    let discount = Item.discount

</script>

<div class="component">

    <div class="background_1">
        <div class="sub_background">
            {#if status}
                <div class="tags">
                    <div class="status">
                        <h4>{status}</h4>
                    </div>
                    <div class="discount">
                        <h4>-{discount}%</h4>
                    </div>
                </div>
            {/if}
            {#if status}
                <img src="{img}" alt="">
            {:else }
                <img style="filter: grayscale(1)" src="{img}" alt="">
            {/if}
        </div>
    </div>

    <div class="background_2">
        <p class="name">{name}</p>
        <p class="price">$ {price}</p>
        {#if status}
            <button class="add">Añadir</button>
        {/if}
    </div>

</div>

<style>

    .component {
        display: flex;
        flex-direction: column;
        gap: 10px;

        & .background_1 {
            background-color: var(--color-C);
            border-radius: 10px;
            padding: 5px;
            height: 190px;
            width: 190px;

            & .sub_background {
                display: flex;
                height: inherit;
                width: inherit;
                justify-content: center;
                align-items: center;
                position: relative;

                & .tags {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                    color: var(--color-B);

                    & .status {
                        background-color: #668F80;
                    }

                    & .discount {
                        background-color: var(--color-A);
                    }

                    & div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 83px;
                        height: 34px;
                        border-radius: 10px;
                    }
                }

                & img {
                    height: inherit;
                    width: min-content;
                }
            }
        }

        & .background_2 {
            display: flex;
            flex-direction: column;
            gap: 5px;

            & .price {
                font-weight: bold;
            }

            & .add {
                width: inherit;
                height: 40px;
                border-radius: 10px;
                background-color: var(--color-A);
                padding: 0 20px 0 20px;
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
        }
    }

</style>