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

    let status_css = false
    if (status.toString() == 'exhausted'){
        status_css = true
    }

</script>

<div class="component">
    <div class="container_1">
        <div class="background_1">
                <div class="sub_background">
                    {#if !status_css}
                        <div class="status indicator">
                            <p>{status}</p>
                        </div>
                        <div class="discount indicator">
                            <p>% {discount}</p>
                        </div>
                    {/if}
                    {#if !status_css}
                    <img src="{img}" alt="">
                        {:else }
                        <img style="filter: grayscale(1)" src="{img}" alt="">
                        {/if}
                </div>
        </div>
        <div class="background_2">
            <p class="name">{name}</p>
            <p class="price">$ {price}</p>
            {#if !status_css}
            <button class="add {status_css}" >Añadir</button>
            {/if}
        </div>
    </div>
</div>

<style>
    .component{
        width: 290px;
        height: auto;
    }
    .container_1{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        margin: 15px;
    }
    .occult{
        display: none;
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