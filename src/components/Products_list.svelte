<script>

    export let Item

    let name = Item.name
    let price = Item.price
    let img = Item.img
    let status = Item.status
    let discount = Item.discount


    let onclick = true

    function OnClick(){
        onclick = !onclick
    }

</script>

<div class="component">
    <div class="container_1">
        <div class="background_1">
                <div class="sub_background">
                    <div class="status indicator">
                        <p>{status}</p>
                    </div>
                    <div class="discount indicator">
                        <p>% {discount}</p>
                    </div>
                    <img src="{img}" alt="">
                </div>
        </div>
        <div class="background_2">
            <p class="name">{name}</p>
            <p class="price">$ {price}</p>
            <button class="add">Añadir</button>
        </div>
    </div>
</div>

<style>
    .component{
        width: 290px;
        height: 480px;
    }
    .container_1{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        margin: 15px;
    }

    .background_1{
        border-radius: 10px;
        background: var(--color-C);
        & .sub_background{
            display: flex;
            flex-direction: column;
            margin: 12px;
            & .status{
                background-color: var(--color-D);
                margin-bottom: 8px;
            }
            & .discount{
                background-color: var(--color-A);
            }
        }
        & img {
            height: 100%;
        }
    }
    .indicator{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 83px;
        height: 34px;
        & p{
            text-align: center;
            margin: 0;
            color: var(--color-B);
            font-weight: normal;
            font-size: 15px;
        }
    }
    .background_2{
        & p{
            margin: 7px;
        }
        & .price{
            font-weight: bold;
        }
        & .add{
            background-color: var(--color-A);
            color: var(--color-B);
            width: 100%;
            height: 40px;
            border-radius: 10px;
            border-block-start: none;
            border-block-end: none;
            border-inline-end: none;
            border-inline-start: none;
        }
    }
</style>